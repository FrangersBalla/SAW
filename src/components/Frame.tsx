import TopSearchBar from './TopBar';
import React, { useRef, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import BoxList from './Page'
import LeftBar from './LeftBar';

/* CORNICE DELLA PAGINA */

const drawerWidth = 300;

export default function MainFrame() {
  return (
    <div style={{ flexDirection: 'column', height: '100%', backgroundColor: '#1A1A1B', width: '100%'}}>
        <TopSearchBar />
        <Box sx={{ 
            display: 'flex', 
            width: '100%', 
            
        }}>
            <Box
                sx={{ width: { sm: drawerWidth }, zIndex: 1 }}
                aria-label="Drawer"
            >
                <LeftBar />
            </Box>

            <Box
                sx={{
                flexGrow: 1, // This makes the main content take up the remaining space
                marginTop: `64px`, // Adds space for the AppBar, ensuring it doesn't overlap
                padding: 3,
                width: `calc(100% - ${drawerWidth}px)`,
                display: 'flex',
                paddingRight: '280px',
                justifyContent: 'center', // Centra orizzontalmente
                alignItems: 'center', // Centra verticalmente
                zIndex: 1
                }}
            >
                < BoxList />
            </Box>
        </Box>
    </div>
  );
}
