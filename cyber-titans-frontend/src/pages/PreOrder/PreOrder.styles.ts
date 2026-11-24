// src/pages/PreOrder/PreOrder.styles.ts
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const PageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'calc(100vh - 64px)',
  [theme.breakpoints.down('md')]: {
    height: 'calc(100vh - 56px)',
  },
  backgroundColor: theme.palette.background.default,
  padding: '1vh 2vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  boxSizing: 'border-box',
  overflow: 'hidden',
  '@media (max-height: 450px) and (orientation: landscape)': {
    height: 'auto',
    minHeight: 'calc(100dvh - 56px)',
    justifyContent: 'flex-start',
    padding: '12px 2vw 24px',
    overflow: 'visible',
  },
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
  '@media (max-height: 450px) and (orientation: landscape)': {
    margin: '0 auto',
    padding: '14px 20px',
    gap: '10px',
  },
}));