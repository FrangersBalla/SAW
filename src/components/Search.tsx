import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import top100Films from '../test';

export default function SearchBar() {
    return (
    <Box sx={{
        display: 'flex',  
        justifyContent: 'center', 
        width: '100%', 
        paddingLeft: '200px', 
        paddingRight: '300px',
        alignItems: 'center',
        overflow: 'visible'
    }}>
        <Autocomplete
            options={top100Films}
            getOptionLabel={(option) => option.label}
            disablePortal
            sx={{
                '& .MuiInputLabel-root': {
                    position: 'absolute', // Posiziona l'etichetta in modo assoluto
                    top: '50%',           // Centrato verticalmente
                    left: '10%',          // Centrato orizzontalmente
                    transform: 'translate(-50%, -50%)', // Centra l'etichetta
                    pointerEvents: 'none', // Evita che l'etichetta interferisca con l'interazione con il campo
                    transition: 'all 0.3s ease', // Transizione fluida
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    opacity: 0, // Rende l'etichetta invisibile quando il campo è in focus
                    transform: 'translate(-50%, -50%) scale(0)', // Opzionale: riduci la dimensione quando è in focus
                },
                width: 500,
                '& .MuiOutlinedInput-root': {
                    borderRadius: 12,
                    height: 40,
                    '&:hover fieldset': {
                        borderColor: 'gray',
                        borderRadius: 12 // Colore del bordo al passaggio del mouse
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'none', // Colore del bordo quando è in focus
                        boxShadow: 'none', // Rimuovi l'effetto di glow blu 
                        opacity: 0
                    },
                    backgroundColor: '#565f68',
                    '& .MuiAutocomplete-Popper': {
                        zIndex: 4, // Verifica che il menu a discesa abbia uno zIndex adeguato
                    },
                },
            }}
            renderOption={(props, option) => {
                const { key, ...optionProps } = props;
                return (
                    <Box
                    key={key}
                    component="li"
                    {...optionProps}
                    >
                    {option.label}
                    </Box>
                );
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search"
                    slotProps={{
                        htmlInput: {
                            ...params.inputProps,
                            autoComplete: 'new-password', // disable autocomplete and autofill
                        },
                    }}
                />
            )}
        />
    </Box>
    );
}
