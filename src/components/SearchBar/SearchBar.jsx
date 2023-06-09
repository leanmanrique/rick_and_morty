import style from "./SearchBar.module.css";
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={style.searchBarContainer}>
      <input
        className={style.searchInput}
        type="search"
        onChange={handleChange}
        value={id}
      />
      <button
        className={style.searchButton}
        onClick={() => {
          onSearch(id);
          setId("");
        }}
      >
        Agregar
      </button>
    </div>
  );
}

export default SearchBar;
