import React, { useState, useEffect } from 'react';
import { Box, Typography, Skeleton } from '@mui/material';

const items = [
  { id: 1, name: 'Elemento 1' },
  { id: 2, name: 'Elemento 2' },
  { id: 3, name: 'Elemento 3' },
  { id: 4, name: 'Elemento 4' },
];

export default function BoxList() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula il caricamento dei dati
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simula 3 secondi di caricamento
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap', // Dispone i box su più righe se necessario
        flexDirection: 'column',
        gap: 4, // Distanza tra i box
      }}
    >
      {loading ? (
        // Mostra Skeleton durante il caricamento
        [1, 2, 3, 4].map((index) => (
          <Box
            key={index}
            sx={{
              width: 650,
              height: 450,
              backgroundColor: '#423e3e',
              borderRadius: 2,
              boxShadow: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Skeleton variant="text" width={100} height={50} />
          </Box>
        ))
      ) : (
        // Mostra i dati reali dopo il caricamento
        items.map((item) => (
          <Box
            key={item.id}
            sx={{
              width: 650,
              height: 450,
              backgroundColor: '#423e3e',
              borderRadius: 2,
              boxShadow: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h6" color="white">
              {item.name}
            </Typography>
          </Box>
        ))
      )}
    </Box>
  );
}
