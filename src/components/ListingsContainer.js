import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onRemoveListing, onFavorite, isFavorite }) {
  console.log(listings);
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} onRemoveListing={onRemoveListing} onFavorite={onFavorite} isFavorite={isFavorite}/>
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
