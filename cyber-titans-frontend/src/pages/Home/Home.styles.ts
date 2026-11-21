// src/pages/Home/Home.styles.ts
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { CarouselWrapper as SharedCarouselWrapper } from '../../styles/shared.styles';

export { PageContainer } from '../../styles/shared.styles';

export const CarouselWrapper = styled(SharedCarouselWrapper)({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#07090e',
});

export const CarouselImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center 75%',
  display: 'block',
});

export const CarouselOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  background: 'linear-gradient(180deg, rgba(7,9,14,0.3) 0%, rgba(7,9,14,0.75) 100%)',
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(5),
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(7),
    paddingRight: theme.spacing(7),
  },
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
}));

export const CarouselTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 800,
  letterSpacing: '0.08em',
  textShadow: '0 0 18px rgba(0, 229, 255, 0.35)',
  fontSize: '1.1rem',
  lineHeight: 1.15,
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.55rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: 'clamp(1.4rem, 3vw, 2.6rem)',
  },
}));

export const CarouselSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginTop: theme.spacing(0.5),
  maxWidth: '700px',
  fontSize: '0.7rem',
  lineHeight: 1.25,
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.88rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
}));

export const DotContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  padding: '0.4vh 0',
  flexShrink: 0,
  [theme.breakpoints.down('md')]: {
    gap: '6px',
  },
}));

interface DotProps {
  active?: boolean;
}

export const PaginationDot = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active',
})<DotProps>(({ theme, active }) => ({
  width: active ? '22px' : '8px',
  height: '8px',
  borderRadius: '999px',
  cursor: 'pointer',
  transition: 'all 0.25s ease',
  backgroundColor: active ? theme.palette.primary.main : 'rgba(0, 229, 255, 0.25)',
}));

export const PreviewGrid = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '1.1vh',
  flexShrink: 0,
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.5vw',
  },
}));

export const PreviewCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '10px',
  backgroundColor: theme.palette.background.paper,
  border: '1px solid rgba(0, 229, 255, 0.3)',
  borderRadius: theme.shape.borderRadius,
  boxSizing: 'border-box',
  minWidth: 0,
  cursor: 'pointer',
  transition: 'border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    boxShadow: '0 0 16px rgba(0, 229, 255, 0.14)',
    transform: 'translateY(-1px)',
  },
}));

export const CardImageThumbnail = styled('img')({
  width: '72px',
  height: '72px',
  objectFit: 'contain',
  objectPosition: 'center center',
  borderRadius: '4px',
  border: '1px solid rgba(0, 229, 255, 0.35)',
  flexShrink: 0,
});

export const PreviewCardContent = styled(Box)({
  flex: 1,
  minWidth: 0,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const PreviewRole = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: 700,
  letterSpacing: '0.05em',
  fontSize: '0.68rem',
  lineHeight: 1.2,
}));

export const PreviewName = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 600,
  lineHeight: 1.2,
  fontSize: '0.95rem',
}));

export const PreviewDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.75rem',
  lineHeight: 1.35,
  marginTop: theme.spacing(0.5),
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
}));