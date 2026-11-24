// src/pages/Lore/Lore.styles.ts
import { alpha, styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { CardMediaImage, SHORT_LANDSCAPE } from '../../styles/shared.styles';

export {
  PageContainer,
  SubNavContainer,
  CarouselWrapper,
  HeroSection as LoreHeroSection,
  ContentGrid as LoreGrid,
  ContentCard as LoreCard,
  CardTextBody as LoreBody,
} from '../../styles/shared.styles';

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

export const LoreImage = styled(CardMediaImage)({
  width: 'auto',
  maxWidth: '100%',
  objectFit: 'contain',
  alignSelf: 'center',
});