import React from "react";
import Search from "./Search";

function Header({ filter, value, input }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search filter={filter} value={value} input={input} />
    </header>
  );
}

export default Header;
