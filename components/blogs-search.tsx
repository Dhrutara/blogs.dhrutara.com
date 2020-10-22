import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Service from '../lib/Service';
import useDebounce from './use-debounce';

export default function BlogsSearch() {

  const router = useRouter();

  const [blogs, setBlogs] = useState([]);
  const [searchText, setSearchText] = useState('');

  const debouncedSearchText = useDebounce(searchText, 500);

  useEffect(
    () => {
      const searchBlogs = async () => {
        if (debouncedSearchText) {
          var data = await Service.getRecommendedBlogs(debouncedSearchText);
          setBlogs(data.data);
        }
        else {
          setBlogs([]);
        }
      }
      searchBlogs();
    },

    [debouncedSearchText]
  );


  return (
    <Autocomplete
        fullWidth
        freeSolo
        id="seach-blogs"
        disableClearable
        getOptionLabel={(option) => (typeof option === 'string' ? option : option.title)}
        filterOptions={(x) => x}
        options={blogs}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search blogs"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
        onInputChange={(event, newInputValue) => {
          setSearchText(newInputValue);
        }}
        renderOption={(option) => {
          return (
            <Typography variant={"subtitle1"}>{option.title}</Typography>
          );
        }}
        onChange={(event, newValue) => {
          router.push(`/blogs/${newValue.slug}`);
        }}
      />
  );
}

