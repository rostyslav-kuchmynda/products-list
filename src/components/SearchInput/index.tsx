import { useEffect, useState } from 'react';

import { useTypedDispatch } from '../../hooks/storeHooks';
import { uiSearchProduct } from '../../store';
import { TextField } from '@mui/material';

export const SearchInput: React.FC = () => {
  const dispatch = useTypedDispatch();

  const [query, setQuery] = useState('');

  useEffect(() => {
    dispatch(uiSearchProduct(query));
  }, [dispatch, query]);

  return (
    <TextField
      fullWidth
      label="Search"
      value={query}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
      }}
    />
  );
};
