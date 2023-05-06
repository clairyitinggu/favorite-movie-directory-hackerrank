import React, { useState } from "react";

function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    props.onSearch(searchTerm);
  };

  return (
    <section className='layout-row justify-content-center mb-40'>
      <input
        type='text'
        placeholder='Search for movie by name'
        className='w-75 py-2'
        data-testid='search'
        value={searchTerm}
        onChange={handleSearch}
      />
    </section>
  );
}

export default Search;
