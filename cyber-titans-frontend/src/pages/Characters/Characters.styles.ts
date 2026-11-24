// src/pages/Characters/Characters.styles.ts
import { alpha, styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export {
  PageContainer,
  SubNavContainer,
  SubNavTab,
  HeroSection as CharacterHeroSection,
  CarouselWrapper,
  ContentGrid as SubGrid,
  ContentCard as SubCard,
  CardMediaImage as SubImage,
  CardTextBody as CardBody,
} from '../../styles/shared.styles';

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
  lineHeight: 1.38,
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
  lineHeight: 1.35,
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