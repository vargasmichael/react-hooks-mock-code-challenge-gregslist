import React from "react";
import Search from "./Search";

  function Header({filterFunction}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search filterFunction={filterFunction}/>
    </header>
  );
}

export default Header;
