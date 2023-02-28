import React, {useState} from "react";

function Search({filterFunction}) {
  const [text, updateText] = useState("")
  //text = input
  function handleSubmit(e) {
    e.preventDefault();
    console.log(text);
    filterFunction(text)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={text}
        onChange={(e) => updateText(e.target.value)}
        //when anything changes in the box it updates the textbox. setter function.
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
