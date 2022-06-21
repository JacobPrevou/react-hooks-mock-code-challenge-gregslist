import React from "react";

function ListingCard({ listing, onRemoveListing, onFavorite, isFavorite }) {

  function handleDeleteListing() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
    method: "DELETE",
  })
    .then((r) => r.json())
    .then(() => onRemoveListing(listing));
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={onFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={onFavorite}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleDeleteListing}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
