import React from "react";

function Search({ filter, value, input }) {

  function handleSubmit(e) {
    e.preventDefault();
    return filter(value);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={value}
        onChange={input}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
