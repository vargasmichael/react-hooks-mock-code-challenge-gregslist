import React from "react";
import ListingCard from "./ListingCard";


 
function ListingsContainer({listings, handleDelete}) {
  console.log(listings)
  const shownListings = listings.map(listing =>{
    return(
    <ListingCard 
    id = {listing.id}
    key={listing.id} 
    img={listing.image} 
    des = {listing.description}
    location = {listing.location} 
    handleDelete= {handleDelete}
    // pass these props up to all <ListingCard /> components
    />
    //these props needed to be passed down from the ListingCard
    //listing.id info from json  
  )})
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {shownListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
