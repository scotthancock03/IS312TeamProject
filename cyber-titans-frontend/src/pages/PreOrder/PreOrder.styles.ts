// src/pages/PreOrder/PreOrder.styles.ts
import { alpha, styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { SHORT_LANDSCAPE } from '../../styles/shared.styles';

export { PageContainer } from '../../styles/shared.styles';

export const FormCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${alpha(theme.palette.primary.main, 0.35)}`,
  borderRadius: theme.shape.borderRadius,
  padding: '2vh 2.5vw',
  maxWidth: '550px',
  width: '100%',
  margin: 'auto',
  boxShadow: `0 0 1.5vw ${alpha(theme.palette.primary.main, 0.08)}`,
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5vh',
  boxSizing: 'border-box',
  [SHORT_LANDSCAPE]: {
    margin: '0 auto',
    padding: '14px 20px',
    gap: '10px',
  },
}));