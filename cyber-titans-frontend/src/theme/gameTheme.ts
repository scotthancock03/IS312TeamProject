import { createTheme } from '@mui/material/styles';

export const gameTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00e5ff', // Neon cyan cyber glow matching your UI mockups
    },
    secondary: {
      main: '#ff0055', // Vibrant cyberpunk pink/red accent
    },
    background: {
      default: '#07090e', // Deep tactical dark grid background
      paper: '#0f131f',   // Container surface color
    },
    text: {
      primary: '#ffffff',
      secondary: '#7c90a8',
    },
  },
  typography: {
    fontFamily: '"Orbitron", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { 
      fontWeight: 700, 
      letterSpacing: '0.05em' 
    },
    h2: { 
      fontWeight: 600, 
      letterSpacing: '0.03em' 
    },
  },
  shape: {
    borderRadius: 8,
  },
});