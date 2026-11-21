// src/pages/Characters/Characters.styles.ts
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export {
  PageContainer,
  SubNavContainer,
  SubNavTab,
  HeroSection as CharacterHeroSection,
  CarouselWrapper,
} from '../../styles/shared.styles';

export const SubGrid = styled(Box)({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  gap: '1.5vw',
  alignItems: 'stretch',
});

export const SubCard = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  backgroundColor: theme.palette.background.paper,
  border: '1px solid rgba(0, 229, 255, 0.3)',
  borderRadius: theme.shape.borderRadius,
  padding: '1.2vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '1.5vh',
  boxSizing: 'border-box',
  boxShadow: '0 0 1vw rgba(0, 229, 255, 0.05)',
  overflowY: 'auto',
  [theme.breakpoints.down('md')]: {
    padding: '3vw',
    gap: '1.2vh',
  },
}));

export const SubImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '55%',
  minHeight: '120px',
  objectFit: 'cover',
  objectPosition: 'center 10%',
  borderRadius: '4px',
  border: '1px solid rgba(0, 229, 255, 0.4)',
  flexShrink: 0,
  [theme.breakpoints.down('md')]: {
    height: '28vh',
    maxHeight: '260px',
  },
}));