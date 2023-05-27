import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import { Link, Text } from "../atoms";
import React, { useEffect, useState } from "react";
import { useProduct } from "../../hooks/useProduct";

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const {searchResults, searchProducts, clearSearchResult} = useProduct()

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (searchQuery) {
        searchProducts(searchQuery)
        console.log("gaagzavne requesti")
      } else {
        clearSearchResult()
      }
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchQuery]);

  return (
    <Autocomplete
      freeSolo
      sx={{ width: 300 }}
      disableClearable
      options={searchResults}
      getOptionLabel={(option) => option.name}
      renderOption={(_, option) => {
        const { name, category, _id, price } = option;
        return (
          <Link
            linkTo={`/products/categories/${category}/${_id}`}
            key={_id}
            state={{ id: _id }}
          >
            <Box>
              <Text>{name}</Text>
              <Text>{price}</Text>
            </Box>
          </Link>
        );
      }}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            label="search products"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            inputProps={{
              ...params.inputProps,
              type: "search",
            }}
          />
        );
      }}
    />
  );
};
