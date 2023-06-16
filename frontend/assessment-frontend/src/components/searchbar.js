import React, { useEffect, useState } from 'react';

function  Searchbar({setSearchQuery, searchQuery}) {
    const [query, setQuery] = useState('');

    useEffect( () => {
        setQuery(setSearchQuery);
    }, [searchQuery])
  
    const handleInputChange = (event) => {
      setQuery(event.target.value);
    };
  
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        console.log('setting search term');
        setSearchQuery(query);
      }
    };
  
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <span className="search-icon">
          <i className="fas fa-search"></i>
        </span>
      </div>
    );
}

export default Searchbar;