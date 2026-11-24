// src/pages/Lore/Lore.styles.ts
import { alpha, styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import {
  ContentCard,
  ContentGrid,
  HeroSection,
  SHORT_LANDSCAPE,
} from '../../styles/shared.styles';

export { PageContainer, SubNavContainer, CarouselWrapper } from '../../styles/shared.styles';

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
  color: active ? theme.palette.background.default : theme.palette.primary.main,
  backgroundColor: active ? theme.palette.primary.main : 'transparent',
  border: `1px solid ${active ? theme.palette.primary.main : alpha(theme.palette.primary.main, 0.3)}`,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.default,
  },
  [theme.breakpoints.down('md')]: {
    flex: 1,
    minHeight: '4.6vh',
    padding: '0.8vh 2vw',
    fontSize: '0.72rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  [SHORT_LANDSCAPE]: {
    minHeight: '34px',
    padding: '6px 10px',
    whiteSpace: 'normal',
    overflow: 'visible',
    textOverflow: 'clip',
  },
}));

export const LoreHeroSection = styled(HeroSection)({
  // Inherits shared hero container styling and responsive spacing
});

export const LoreGrid = styled(ContentGrid)({
  // Inherits shared horizontal content grid and short-landscape auto height
});

export const LoreCard = styled(ContentCard)({
  padding: '1.2vw',
});

export const LoreImage = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  maxHeight: '34vh',
  objectFit: 'contain',
  alignSelf: 'center',
  borderRadius: '4px',
  border: `1px solid ${alpha(theme.palette.primary.main, 0.4)}`,
  flexShrink: 0,
  cursor: 'pointer',
  transition: 'border-color 0.2s ease, transform 0.2s ease',
  '&:hover': {
    borderColor: theme.palette.primary.main,
  },
  [theme.breakpoints.down('md')]: {
    maxHeight: '26vh',
  },
  [SHORT_LANDSCAPE]: {
    maxHeight: '150px',
  },
}));