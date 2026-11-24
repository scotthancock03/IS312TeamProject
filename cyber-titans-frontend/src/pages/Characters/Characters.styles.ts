// src/pages/Characters/Characters.styles.ts
import { alpha, styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { ContentCard, ContentGrid, SHORT_LANDSCAPE } from '../../styles/shared.styles';

export {
  PageContainer,
  SubNavContainer,
  SubNavTab,
  HeroSection as CharacterHeroSection,
  CarouselWrapper,
} from '../../styles/shared.styles';

export const SubGrid = styled(ContentGrid)({});

export const SubCard = styled(ContentCard)({
  padding: '1vw',
});

export const SubImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '52%',
  minHeight: '130px',
  objectFit: 'cover',
  objectPosition: 'center 10%',
  borderRadius: '4px',
  border: `1px solid ${alpha(theme.palette.primary.main, 0.35)}`,
  flexShrink: 0,
  cursor: 'pointer',
  transition: 'border-color 0.2s ease, transform 0.2s ease',
  '&:hover': {
    borderColor: theme.palette.primary.main,
  },
  [theme.breakpoints.down('md')]: {
    flex: '0 1 24dvh',
    height: 'auto',
    minHeight: '75px',
    maxHeight: '220px',
  },
  [SHORT_LANDSCAPE]: {
    flex: '0 0 auto',
    height: '170px',
    maxHeight: '170px',
  },
}));

export const CardBody = styled(Box)({
  flex: '1 0 auto',
  minHeight: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  overflowY: 'auto',
  paddingRight: '4px',
  [SHORT_LANDSCAPE]: {
    flex: '0 0 auto',
    overflowY: 'visible',
    paddingRight: 0,
  },
});

export const CharacterTitleKicker = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: 700,
  fontSize: '0.68rem',
  letterSpacing: '0.09em',
  textTransform: 'uppercase',
  lineHeight: 1.2,
}));

export const CharacterNameHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 800,
  fontSize: '1.15rem',
  letterSpacing: '0.04em',
  lineHeight: 1.2,
  marginTop: '2px',
}));

export const OriginBio = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.78rem',
  lineHeight: 1.4,
  marginTop: theme.spacing(0.4),
  paddingBottom: theme.spacing(0.5),
  marginBottom: theme.spacing(0.5),
  borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.16)}`,
}));

export const KitList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.45),
}));

export const KitRow = styled(Box)({
  fontSize: '0.77rem',
  lineHeight: 1.38,
});

interface SlotBadgeProps {
  isUltimate?: boolean;
}

export const SlotBadge = styled('span', {
  shouldForwardProp: (prop) => prop !== 'isUltimate',
})<SlotBadgeProps>(({ theme, isUltimate }) => ({
  display: 'inline-block',
  fontSize: '0.62rem',
  fontWeight: 800,
  letterSpacing: '0.07em',
  textTransform: 'uppercase',
  padding: '1px 6px',
  marginRight: '7px',
  borderRadius: '3px',
  verticalAlign: 'middle',
  color: isUltimate ? theme.palette.secondary.main : theme.palette.primary.main,
  backgroundColor: isUltimate
    ? alpha(theme.palette.secondary.main, 0.14)
    : alpha(theme.palette.primary.main, 0.12),
  border: `1px solid ${
    isUltimate ? alpha(theme.palette.secondary.main, 0.38) : alpha(theme.palette.primary.main, 0.32)
  }`,
}));

export const MoveNameText = styled('span')(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 700,
  marginRight: '5px',
}));

export const MoveDescText = styled('span')(({ theme }) => ({
  color: theme.palette.text.secondary,
}));