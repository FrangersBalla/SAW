import React from 'react';
import { Box, Typography } from '@mui/material';

const items = [
  { id: 1, name: 'Elemento 1' },
  { id: 2, name: 'Elemento 2' },
  { id: 3, name: 'Elemento 3' },
  { id: 4, name: 'Elemento 4' },
];

export default function BoxList() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap', // Dispone i box su più righe se necessario
        flexDirection: 'column',
        gap: 4, // Distanza tra i box
      }}
    >
      {items.map((item) => (
        <Box
          key={item.id}
          sx={{
            width: 650, // Puoi cambiare la larghezza dei box
            height: 450, // Puoi cambiare l'altezza dei box
            backgroundColor: '#423e3e', // Colore di sfondo
            borderRadius: 2, // Angoli arrotondati
            boxShadow: 2, // Ombra
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h6" color="white">
            {item.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
