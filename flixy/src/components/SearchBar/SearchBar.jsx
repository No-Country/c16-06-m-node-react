import React, { useState } from 'react';
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import styles from './searchbar.module.css';

const SearchBar = ({ onSearch, onClearSearch }) => {
  const [query, setQuery] = useState('');
  const [isSearchCleared, setIsSearchCleared] = useState(false);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setIsSearchCleared(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query.toLowerCase());
  };

  const handleClearSearch = () => {
    setQuery('');
    setIsSearchCleared(true);
    onClearSearch(); 
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Buscar Documental..."
            className={styles.searchInput}
            value={query}
            onChange={handleInputChange}
          />
          {query !== '' && (
            <button type="button" className={styles.clearButton} onClick={handleClearSearch}>
              X
            </button>
          )}
        </div>
        <button type="submit" className={styles.searchButton}>
          <MagnifyingGlass size={24} />
        </button>
      </form>
    </div>
  );
  
  
  
};

export default SearchBar;
