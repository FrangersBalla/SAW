import { List, ListItem, ListItemButton, ListItemText, Drawer, ListItemAvatar, Avatar } from '@mui/material';

// Array modificato con oggetti che contengono nome e avatar
const avatars = [
  { name: 'Mike', src: '/images/avatar/1.jpg', key: 'mike' },
  { name: 'Fray', src: '/images/avatar/1.jpg', key: 'fray' },
  { name: 'Sebastioski', src: '/images/avatar/2.jpg', key: 'sebastioski' },
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
              <ListItemAvatar>
                <Avatar alt={avatar.name} src={avatar.src} />
              </ListItemAvatar>
              <ListItemText primary={avatar.name} sx={{ color: 'white' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
