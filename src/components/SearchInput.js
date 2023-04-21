import React from "react";

const SearchInput = () => {


  return (
    <div>
      <form
        className="d-flex search-form"
        role="search"

      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"

        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
