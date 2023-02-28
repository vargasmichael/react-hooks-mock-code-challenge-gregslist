import React, { useState } from "react";



function ListingCard({id, img,  des, location, handleDelete}) {
  //passing handleDelete in props  
  const [isFavorite, setFavorite] = useState(false)

  
  function handleClick(){
    setFavorite(!isFavorite);
  }

  function deleteOnClick(){
    fetch(`http://localhost:6001/listings/${id}`, {
method: "DELETE"})
.then(res => res.json())
.then(()=> {
  console.log("Successfully deleted")
handleDelete(id)}
)
  }
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={img} alt={"description"} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{des}</strong>
        <span> · {location}</span>
        <button onClick={()=>deleteOnClick()} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
