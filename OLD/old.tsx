import React, { useRef, useState, useEffect } from 'react';
import { Box, AppBar, Toolbar, Typography, List, ListItem, ListItemButton, ListItemText, Drawer } from '@mui/material';
import BoxList from '../Page'
import SearchBar from '../Search';
/* CORNICE DELLA PAGINA */

const drawerWidth = 300;

export default function ResponsiveDrawer(props: any) {
  const [appBarHeight, setAppBarHeight] = useState(0); // Stato per memorizzare l'altezza dell'AppBar
  const appBarRef = useRef<any>(null); // Riferimento all'AppBar

  const drawer = (
    <>
      <List sx={{ top: appBarHeight ? `${appBarHeight}px` : '60px' , padding: 0}}> {/* Usa appBarHeight dinamico */}
        {['seba', 'mike', 'guy', 'yo'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={index + ' ' + text} sx={{color:'white'}} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );

  useEffect(() => {
    if (appBarRef.current) {
      // Misura l'altezza dell'AppBar
      const height = appBarRef.current.offsetHeight;
      setAppBarHeight(height);
    }
  }, []); // Eseguito una sola volta al montaggio del componente

  return (
    <Box sx={{ display: 'flex'}}>
      <AppBar
        ref={appBarRef} // Aggiungi il riferimento all'AppBar
        position="fixed"
        sx={{
          width: { sm: '100%' },
          boxShadow: 'none',
          backgroundColor: '#1A1A1B',
          zIndex: 2,
          borderTop: '1px solid rgba(210, 210, 210, 0.3)',
          borderBottom: '1px solid rgba(210, 210, 210, 0.3)'
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{zIndex: 3, width: '180px'}}>
            MYSOCIAL
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        sx={{ width: { sm: drawerWidth }, zIndex: 1, backgroundColor: '#1A1A1B' }}
        aria-label="Drawer"
      >
        <Drawer
          variant="permanent" //sempre visibile --verrà modificato poi
          sx={{
            //display: { xs: 'none', sm: 'block' }, dovremmo cambiarlo per implementazione su altri dispositivi
            '& .MuiDrawer-paper': { backgroundColor: 'trasparent',  width: drawerWidth, borderRight: '1px solid rgba(210, 210, 210, 0.3)' , position: 'fixed'},
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        sx={{
          flexGrow: 1, // This makes the main content take up the remaining space
          marginTop: `${appBarHeight}px`, // Adds space for the AppBar, ensuring it doesn't overlap
          padding: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          display: 'flex',
          paddingRight: '280px',
          justifyContent: 'center', // Centra orizzontalmente
          alignItems: 'center', // Centra verticalmente
          zIndex: 1,
          backgroundColor: '#1A1A1B'
        }}
      >
        < BoxList />
      </Box>
    </Box>
  );
}
