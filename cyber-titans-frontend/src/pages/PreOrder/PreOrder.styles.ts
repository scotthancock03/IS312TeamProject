// src/pages/PreOrder/PreOrder.styles.ts
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const PageContainer = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.palette.background.default,
  padding: '1vh 2vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between', // Keeps navbar at top
  alignItems: 'center',            // Centers children horizontally
  boxSizing: 'border-box',
  overflow: 'hidden',
}));

export const NavbarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.6vh 2vw',
  backgroundColor: theme.palette.background.paper,
  border: '1px solid rgba(0, 229, 255, 0.4)',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 0 1.5vw rgba(0, 229, 255, 0.1)',
  width: '100%',
  boxSizing: 'border-box',
}));

export const FormCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: '1px solid rgba(0, 229, 255, 0.35)',
  borderRadius: theme.shape.borderRadius,
  padding: '2vh 2.5vw',
  maxWidth: '550px',
  width: '100%',
  margin: 'auto', // Centers vertically in the remaining viewport space
  boxShadow: '0 0 1.5vw rgba(0, 229, 255, 0.08)',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5vh',
  boxSizing: 'border-box',
}));