// src/pages/Characters/Characters.styles.ts
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const PageContainer = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.palette.background.default,
  padding: '1vh 2vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start', // Keeps everything packed tightly to the top
  alignItems: 'stretch',
  gap: '1vh', // Tight, consistent vertical gap between all sections
  boxSizing: 'border-box',
  overflow: 'hidden',
}));

export const NavbarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.8vh 2vw',
  backgroundColor: theme.palette.background.paper,
  border: '1px solid rgba(0, 229, 255, 0.4)',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 0 1.5vw rgba(0, 229, 255, 0.1)',
  width: '100%',
  boxSizing: 'border-box',
}));

export const SubNavContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '6vw', // Generous, balanced spacing that keeps items centered
  padding: '0.4vh 15vw',
  backgroundColor: 'rgba(15, 19, 31, 0.9)',
  border: '1px solid rgba(0, 229, 255, 0.25)',
  borderRadius: theme.shape.borderRadius,
  width: '100%',
  boxSizing: 'border-box',
}));

interface TabProps {
  active?: boolean;
}

export const SubNavTab = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active',
})<TabProps>(({ theme, active }) => ({
  padding: '0.4vh 1.5vw',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 600,
  fontSize: '0.8rem',
  letterSpacing: '0.05em',
  color: active ? '#07090e' : theme.palette.primary.main,
  backgroundColor: active ? theme.palette.primary.main : 'transparent',
  border: `1px solid ${active ? theme.palette.primary.main : 'rgba(0, 229, 255, 0.3)'}`,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: '#07090e',
  },
}));

export const CharacterHeroSection = styled(Box)(({ theme }) => ({
  padding: '1vh 1.5vw',
  backgroundColor: theme.palette.background.paper,
  border: '1px solid rgba(0, 229, 255, 0.35)',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 0 1vw rgba(0, 229, 255, 0.05)',
  width: '100%',
}));

export const SubGrid = styled(Box)({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1.5vw',
});

export const SubCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: '1px solid rgba(0, 229, 255, 0.3)',
  borderRadius: theme.shape.borderRadius,
  padding: '1vh 1.2vw',
  display: 'flex',
  gap: '1vw',
  alignItems: 'center',
  height: '19vh', // Compact height to prevent vertical spilling
  boxSizing: 'border-box',
  boxShadow: '0 0 1vw rgba(0, 229, 255, 0.05)',
}));

export const SubImage = styled('img')({
  width: '32%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '4px',
  border: '1px solid rgba(0, 229, 255, 0.4)',
});