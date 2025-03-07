import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import top100Films from '../test';

export default function SearchBar() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simula 3 secondi di caricamento
  }, []);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      {loading ? (
        <Skeleton variant="rectangular" width={500} height={40} />
      ) : (
        <Autocomplete
          options={top100Films}
          getOptionLabel={(option) => option.label}
          disablePortal
          sx={{
            '& .MuiInputLabel-root': {
              position: 'absolute',
              top: '50%',
              left: '10%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              transition: 'all 0.3s ease',
            },
            width: 500,
            '& .MuiOutlinedInput-root': {
              borderRadius: 12,
              height: 40,
              backgroundColor: '#565f68',
            },
          }}
          renderOption={(props, option) => (
            <Box component="li" {...props}>
              {option.label}
            </Box>
          )}
          renderInput={(params) => <TextField {...params} label="Search" />}
        />
      )}
    </Box>
  );
}
