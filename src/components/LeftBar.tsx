import React from 'react';
import { List, ListItem, ListItemButton, ListItemText, Drawer, ListItemAvatar, Avatar, Accordion, AccordionSummary, AccordionDetails, Typography, Button } from '@mui/material';

// Array modificato con oggetti che contengono nome e avatar
const avatars = [
  { name: 'Mike', src: '/images/avatar/1.jpg', key: 'mike', description: 'Developer from NYC' },
  { name: 'Fray', src: '/images/avatar/1.jpg', key: 'fray', description: 'Designer from LA' },
  { name: 'Sebastioski', src: '/images/avatar/2.jpg', key: 'sebastioski', description: 'Artist from Berlin' },
];

export default function LeftBar() {
  return (
    <Drawer
      variant="permanent" //sempre visibile --verrà modificato poi
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: '#1A1A1B',
          width: 300,
          borderRight: '1px solid rgba(210, 210, 210, 0.3)',
          position: 'fixed',
        },
      }}
    >
      <List sx={{ top: '64px', padding: 1 }}>
        {avatars.map((avatar) => (
          <ListItem key={avatar.key} disablePadding>
            <ListItemButton>
              <Accordion sx={{ width: '100%', backgroundColor: 'transparent' }}>
                <AccordionSummary
                  aria-controls={`panel-${avatar.key}-content`}
                  id={`panel-${avatar.key}-header`}
                >
                  <ListItemAvatar>
                    <Avatar alt={avatar.name} src={avatar.src} />
                  </ListItemAvatar>
                  <ListItemText primary={avatar.name} sx={{ color: 'white', marginLeft: 2 }} />
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: 'transparent', color: 'white', borderRadius: 12}}>
                  <Button sx={{height: '20px', color: 'white', backgroundColor: 'transparent', borderRadius: 12, paddingBottom: 2,}}>Chat</Button><br/>
                  <Button sx={{top: '20px', color: 'white', backgroundColor: 'transparent', borderRadius: 12}}>Settings</Button>
                </AccordionDetails>
              </Accordion>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
