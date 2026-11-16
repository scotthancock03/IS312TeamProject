// src/pages/Lore/Lore.styles.ts
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const PageContainer = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.palette.background.default,
  padding: '1vh 2vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  gap: '0.8vh',
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
  flexShrink: 0,
}));

export const SubNavContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  flexWrap: 'nowrap',
  gap: '1.5vw',
  padding: '0.6vh 1.5vw',
  backgroundColor: 'rgba(15, 19, 31, 0.9)',
  border: '1px solid rgba(0, 229, 255, 0.25)',
  borderRadius: theme.shape.borderRadius,
  width: '100%',
  boxSizing: 'border-box',
  overflowX: 'auto',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  flexShrink: 0, 
  '&::-webkit-scrollbar': {
    display: 'none',
  },
}));

interface TabProps {
  active?: boolean;
}

export const SubNavTab = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active',
})<TabProps>(({ theme, active }) => ({
  flex: 1,
  minWidth: 0,
  minHeight: '6vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1vh 1vw',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 600,
  fontSize: '0.75rem',
  letterSpacing: '0.05em',
  textAlign: 'center',
  whiteSpace: 'normal',
  lineHeight: '1.3',
  color: active ? '#07090e' : theme.palette.primary.main,
  backgroundColor: active ? theme.palette.primary.main : 'transparent',
  border: `1px solid ${active ? theme.palette.primary.main : 'rgba(0, 229, 255, 0.3)'}`,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: '#07090e',
  },
}));

export const LoreHeroSection = styled(Box)(({ theme }) => ({
  padding: '0.8vh 1.5vw',
  backgroundColor: theme.palette.background.paper,
  border: '1px solid rgba(0, 229, 255, 0.35)',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 0 1vw rgba(0, 229, 255, 0.05)',
  width: '100%',
  flexShrink: 0, 
}));

export const LoreGrid = styled(Box)({
  width: '100%',
  flex: 1,
  minHeight: 0, 
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  gap: '1.5vw',
  alignItems: 'stretch',
});

export const LoreCard = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  backgroundColor: theme.palette.background.paper,
  border: '1px solid rgba(0, 229, 255, 0.3)',
  borderRadius: theme.shape.borderRadius,
  padding: '1.2vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '1vh',
  boxSizing: 'border-box',
  boxShadow: '0 0 1vw rgba(0, 229, 255, 0.05)',
  overflow: 'hidden',           // Prevents any card scrollbars
}));

export const LoreImage = styled('img')({
  maxWidth: '100%',
  maxHeight: '34vh',            // Limits vertical height so it never overflows the card
  objectFit: 'contain',         // Preserves 100% of the image pixels without cropping
  alignSelf: 'center',          // Centers the image horizontally inside the card
  borderRadius: '4px',
  border: '1px solid rgba(0, 229, 255, 0.4)',
  flexShrink: 0,
});