import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";



function App() {

const [shownListings, setListings] = useState([])
//setlistings and usestate do the same thing and update the state (variable)

useEffect(() => {
  fetch("http://localhost:6001/listings")
    .then((r) => r.json())
    .then((listings) => {
      
       setListings(listings)

       
    });
}, []);



function handleDelete(id){
  //we target id because we want to delete is
  console.log(id)
  const updatedListings = shownListings.filter((listing)=>listing.id !== id)
  setListings(updatedListings);
}
function filterFunction(search){
  console.log(search)
  
  const updatedListings = shownListings.filter((listing)=>listing.description.includes(search) )
  setListings(updatedListings);
  
  
}

  return (
    <div className="app">
      <Header filterFunction={filterFunction}/>
      <ListingsContainer listings = {shownListings} handleDelete = {handleDelete}/>
      {/* this has to match what it says in the listings container */}
    </div>
  );
  }

export default App;
