import React from "react";
// Styling
import { SearchBarStyled } from "../styles";

const SearchBar = (props) => {
  return (
    <SearchBarStyled
      onChange={(event) => props.setQuery(event.target.value.toLowerCase())}
    />
  );
};

// const SearchBar = (props) => {
//   const handleChange = (event) => {
//     console.log(event.target.value);
//   };
//   return (
//     <SearchBarStyled
//       //onChange={(setQuery) => console.log(setQuery.event.target.value)}
//       onChange={(setQuery) => handleChange(setQuery)}
//       placeholder="Search for a cookie name"
//     />
//   );
// };

export default SearchBar;
