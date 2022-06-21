import React, { useState, useEffect } from "react";
// import { useState, useEffect } from "react/cjs/react.production.min";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [itemName, setItemName] = useState('')

  // const filter = () => {
  //   // const keyword = e.target.value;
  //   console.log(itemName);
  //   if (itemName !== '') {
  //     const results = listings.filter((listing) => {
  //       return listing.description.toLowerCase().includes(itemName.toLowerCase());
  //     });
  //     setSearchResult(results);
  //   } else {
  //     setSearchResult(listings);
  //   }
  //   setItemName(itemName);
  // };

  const filter = () => {
    // const keyword = e.target.value;
    if (itemName !== '') {
      const results = listings.filter((listing) => {
        return listing.description.toLowerCase().includes(itemName.toLowerCase());
      });
      setSearchResult(results);
    } else {
      setSearchResult(listings);
    }
    setItemName(itemName);
  };


  function searchInput(e) {
    setItemName(e.target.value);
  }


  function handleRemoveListing(deletedListing) {
    const updatedListings = listings.filter((listing) => listing.id !== deletedListing.id);
    console.log(deletedListing);
    setListings(updatedListings);
    alert('Clicked');
    console.log(listings);
  };

  function handleFavorite() {
    setIsFavorite(!isFavorite);
    console.log(isFavorite);
  }

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((r) => r.json())
    .then ((listings) => {
      setListings(listings);
      setSearchResult(listings);
    });
  }, []);

  console.log(listings);
  console.log(searchResult);
  return (
    <div className="app">
      <Header filter={filter} value={itemName} input={searchInput} />
      <ListingsContainer listings={searchResult} onRemoveListing={handleRemoveListing} onFavorite={handleFavorite} isFavorite={isFavorite}/>
    </div>
  );
}

export default App;

