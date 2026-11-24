// src/styles/shared.styles.ts
import { alpha, styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const SHORT_LANDSCAPE = '@media (max-height: 450px) and (orientation: landscape)';

export const PageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'calc(100dvh - 64px)',
  [theme.breakpoints.down('md')]: {
    height: 'calc(100dvh - 56px)',
  },
  backgroundColor: theme.palette.background.default,
  padding: '1vh 2vw',
  paddingBottom: 'calc(1vh + env(safe-area-inset-bottom, 0px))',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  gap: '0.8vh',
  boxSizing: 'border-box',
  overflow: 'hidden',
  [SHORT_LANDSCAPE]: {
    height: 'auto',
    minHeight: 'calc(100dvh - 56px)',
    overflow: 'visible',
    padding: '10px 2vw calc(20px + env(safe-area-inset-bottom, 0px))',
    gap: '10px',
  },
}));

export const SubNavContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  flexWrap: 'nowrap',
  gap: '1.5vw',
  padding: '0.6vh 1.5vw',
  backgroundColor: alpha(theme.palette.background.paper, 0.9),
  border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
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
  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
    gap: '1.2vw',
    padding: '0.6vh 1.2vw',
    overflowX: 'hidden',
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
  fontSize: '0.78rem',
  letterSpacing: '0.05em',
  textAlign: 'center',
  whiteSpace: 'normal',
  lineHeight: '1.3',
  color: active ? theme.palette.background.default : theme.palette.primary.main,
  backgroundColor: active ? theme.palette.primary.main : 'transparent',
  border: `1px solid ${active ? theme.palette.primary.main : alpha(theme.palette.primary.main, 0.3)}`,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.default,
  },
  [theme.breakpoints.down('md')]: {
    flex: '1 1 0',
    minWidth: 0,
    maxWidth: '100%',
    minHeight: '4.6vh',
    padding: '0.6vh 1.5vw',
    fontSize: '0.66rem',
    lineHeight: '1.2',
    whiteSpace: 'normal',
    overflow: 'hidden',
  },
  [SHORT_LANDSCAPE]: {
    minHeight: '34px',
    padding: '6px 10px',
    fontSize: '0.72rem',
  },
}));

export const HeroSection = styled(Box)(({ theme }) => ({
  padding: '0.8vh 1.5vw',
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${alpha(theme.palette.primary.main, 0.35)}`,
  borderRadius: theme.shape.borderRadius,
  boxShadow: `0 0 1vw ${alpha(theme.palette.primary.main, 0.05)}`,
  width: '100%',
  flexShrink: 0,
  [theme.breakpoints.down('md')]: {
    padding: '1vh 3vw',
  },
  [SHORT_LANDSCAPE]: {
    padding: '8px 14px',
  },
}));

export const CarouselWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  flex: 1,
  minHeight: 0,
  display: 'flex',
  alignItems: 'center',
  gap: '1vw',
  [theme.breakpoints.down('md')]: {
    gap: '1.5vw',
  },
  [SHORT_LANDSCAPE]: {
    flex: '0 0 auto',
    minHeight: 'auto',
    alignItems: 'center',
    '& > button, & > .MuiButtonBase-root, & > .MuiIconButton-root': {
      height: '44px !important',
      width: '44px !important',
      minWidth: '44px !important',
      maxWidth: '44px !important',
      maxHeight: '44px !important',
      borderRadius: '50% !important',
      alignSelf: 'center !important',
      flexShrink: 0,
    },
  },
}));

export const ContentGrid = styled(Box)({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  gap: '1.5vw',
  alignItems: 'stretch',
  [SHORT_LANDSCAPE]: {
    height: 'auto',
  },
});

export const ContentCard = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
  borderRadius: theme.shape.borderRadius,
  padding: '1.1vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '1vh',
  boxSizing: 'border-box',
  boxShadow: `0 0 18px ${alpha(theme.palette.primary.main, 0.05)}`,
  overflowY: 'auto',
  [theme.breakpoints.down('md')]: {
    padding: '3vw',
    gap: '1.2vh',
  },
  [SHORT_LANDSCAPE]: {
    padding: '12px 14px',
    gap: '8px',
    overflowY: 'visible',
  },
}));