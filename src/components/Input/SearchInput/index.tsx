import React from "react";
import styles from "./SearchInput.module.css";
import Typography from "../../Typography";

interface InputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const SearchInput: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder = "Search...",
}) => {
  return (
    <div className={styles.inputContainer}>
      <Typography fontsize="24px">Search any place</Typography>
      <div className={styles.InputWrapper}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={styles.searchInput}
        />
        <img
          src="/icons/search.svg"
          alt="Search icon"
          className={styles.searchIcon}
        />
      </div>
    </div>
  );
};

export default SearchInput;
