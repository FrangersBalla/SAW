import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, TextField, Autocomplete } from '@mui/material';
import SearchBar from './Search';


export default function TopSearchBar() {

  return (
    <Box sx={{flexDirection: 'column', overflow: 'visible'}}>
      {/* Barra superiore */}
      <AppBar sx={{ backgroundColor: '#1A1A1B' , height: 64}}>
        <Toolbar>
          <Typography variant="h6" >
            MYSOCIAL
          </Typography>
          {/* Barra di ricerca centrata */}
          <Box sx={{ display: 'flex', width: '100%'}}>
            < SearchBar/>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
