import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useAuthContext } from "../../context/AppContext";

const SearchForm = () => {
  const { setSearchTerms } = useAuthContext();
  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;

    if (searchValue.length < 3) return;

    setSearchTerms(searchValue);
  };
  return (
    <form className="search-container" onSubmit={handleSearch}>
      <div className="search-wrapper">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for News..."
          name="search"
        />

        <button className="search-icon-holder" type="submit">
          <AiOutlineSearch className="search-icon" />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
