import React from 'react';
import { Box, Typography } from '@mui/material';

const item = [
  { title: 'slurp', content: '/images/avatar/2.jpg', key: 0, description: 'Developer from NYC', like: 0, Comment: [''] },
  { title: 'guy', content: '/images/avatar/2.jpg', key: 1, description: 'Designer from LA' },
  { title: 'siuuu', content: '/images/avatar/2.jpg', key: 2, description: 'Artist from Berlin' },
  { title: 'guy', content: '/images/avatar/2.jpg', key: 3, description: 'Designer from LA' },
  { title: 'siuuu', content: '/images/avatar/2.jpg', key: 4, description: 'Artist from Berlin' }
];

export default function BoxList() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        gap: 4,
      }}
    >
      {item.map((item) => (
        <Box
          key={item.key}
          sx={{
            width: 730,
            height: 550,
            backgroundColor: 'transparent',
            borderRadius: 2,
            boxShadow: 2,
            display: 'flex',
            justifyContent: 'flex-start',
            overflow: 'hidden',
            flexDirection: 'column',
            '&:hover': {
              backgroundColor: '#20252a'
            }
          }}
        >
          {/* Typography con paddingLeft correttamente applicato */}
          <Typography
            variant="h5"
            color="white"
            sx={{
              paddingBottom: 1,
              paddingLeft: 2,  // Questo paddingLeft dovrebbe funzionare ora
              paddingTop: 1,
              alignSelf: 'flex-start', // Allinea il titolo a sinistra
            }}
          >
            {item.title}
          </Typography>
          {/* Box contenente l'immagine */}
          <Box
            sx={{
              height: 450,
              width: '96%',
              alignSelf: 'center',
              overflow: 'hidden',
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
          >
            <img
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
              }}
              src={item.content}
              alt={item.title}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
}
