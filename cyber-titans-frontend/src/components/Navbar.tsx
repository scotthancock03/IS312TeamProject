import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink, useLocation } from 'react-router-dom';

export interface NavbarProps {
  brandTitle?: string;
}

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Characters', path: '/characters' },
  { label: 'Lore', path: '/lore' },
];

export default function Navbar({ brandTitle = 'CYBER TITANS' }: NavbarProps) {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleOpenMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    setMobileOpen(true);
  };

  const handleCloseMenu = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar position="sticky" color="transparent" elevation={0} sx={{ borderBottom: '1px solid rgba(0, 229, 255, 0.35)' }}>
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
          <Typography
            component={RouterLink}
            to="/"
            variant="h6"
            sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.1em', textDecoration: 'none' }}
          >
            {brandTitle}
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: { md: 2, lg: 5 }, alignItems: 'center' }}>
            {NAV_LINKS.map((item) => (
              <Button
                key={item.path}
                component={RouterLink}
                to={item.path}
                color={pathname === item.path ? 'primary' : 'inherit'}
              >
                {item.label}
              </Button>
            ))}
            <Button
              component={RouterLink}
              to="/preorder"
              variant="outlined"
              color="primary"
              size="small"
            >
              Pre-Order
            </Button>
          </Box>

          <IconButton
            color="inherit"
            edge="end"
            aria-label="menu"
            onClick={handleOpenMenu}
            sx={{ display: { xs: 'inline-flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={handleCloseMenu}>
        <Box sx={{ width: 220, pt: 2 }}>
          <List>
            {[...NAV_LINKS, { label: 'Pre-Order', path: '/preorder' }].map((item) => (
              <ListItemButton
                key={item.path}
                component={RouterLink}
                to={item.path}
                selected={pathname === item.path}
                onClick={handleCloseMenu}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}