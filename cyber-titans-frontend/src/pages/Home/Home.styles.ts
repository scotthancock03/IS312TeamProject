// src/pages/Home/Home.styles.ts
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const PageContainer = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.palette.background.default,
  padding: '1.5vh 2vw 2vh 2vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  boxSizing: 'border-box',
  overflow: 'hidden',
}));

export const NavbarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1vh 2vw',
  backgroundColor: theme.palette.background.paper,
  border: '1px solid rgba(0, 229, 255, 0.4)',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 0 1.5vw rgba(0, 229, 255, 0.1)',
  width: '100%',
  boxSizing: 'border-box',
}));

export const CarouselWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: '84vw',
  flex: 1,
  minHeight: '34vh',
  maxHeight: '44vh',
  margin: '1vh auto',
  border: '2px solid rgba(0, 229, 255, 0.5)',
  borderRadius: `${parseInt(String(theme.shape.borderRadius), 10) * 2}px`,
  overflow: 'hidden',
  boxShadow: '0 0 2vw rgba(0, 229, 255, 0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const CarouselImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  filter: 'brightness(0.65)',
  transition: 'transform 0.5s ease-in-out',
});

export const CarouselOverlay = styled(Box)({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '2vh 2vw',
  background: 'linear-gradient(to top, rgba(7, 9, 14, 0.95) 0%, rgba(7, 9, 14, 0.4) 60%, transparent 100%)',
});

export const CarouselTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 700,
  letterSpacing: '0.08em',
  textShadow: '0 0 1.5vw rgba(0, 229, 255, 0.6)',
  fontSize: 'clamp(1.4rem, 3vw, 2.6rem)',
}));

export const DotContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1.2vw',
  margin: '0.5vh 0',
});

interface DotProps {
  active?: boolean;
}

export const PaginationDot = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active',
})<DotProps>(({ theme, active }) => ({
  width: '1vw',
  height: '1.1vw',
  minWidth: '8px',
  minHeight: '8px',
  borderRadius: '50%',
  backgroundColor: active ? theme.palette.primary.main : 'rgba(255, 255, 255, 0.2)',
  cursor: 'pointer',
  boxShadow: active ? '0 0 0.8vw #00e5ff' : 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
  },
}));

export const PreviewCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: '1px solid rgba(0, 229, 255, 0.35)',
  borderRadius: theme.shape.borderRadius,
  padding: '1.2vh 1.2vw',
  display: 'flex',
  gap: '1vw',
  alignItems: 'center',
  boxShadow: '0 0 1vw rgba(0, 229, 255, 0.05)',
  height: '17vh',
  boxSizing: 'border-box',
}));

export const CardImageThumbnail = styled('img')({
  width: '32%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '4px',
  border: '1px solid rgba(0, 229, 255, 0.4)',
});