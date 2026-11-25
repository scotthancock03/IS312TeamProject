// src/components/CarouselArrow.tsx
import { IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface CarouselArrowProps {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled?: boolean;
  label: string;
  size?: 'small' | 'medium';
}

export function CarouselArrow({
  direction,
  onClick,
  disabled,
  label,
  size = 'medium',
}: CarouselArrowProps) {
  return (
    <IconButton
      size={size}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      sx={{
        color: 'primary.main',
        border: '1px solid rgba(0, 229, 255, 0.3)',
        backgroundColor: 'rgba(15, 19, 31, 0.8)',
        flexShrink: 0,
        '&.Mui-disabled': { opacity: 0.3 },
      }}
    >
      {direction === 'left' ? <ChevronLeftIcon fontSize={size} /> : <ChevronRightIcon fontSize={size} />}
    </IconButton>
  );
}

export default CarouselArrow;