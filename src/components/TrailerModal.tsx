// src/components/TrailerModal.tsx
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export interface TrailerModalData {
  src?: string;
  poster: string;
  title: string;
  subtitle?: string;
}

interface TrailerModalProps {
  trailer: TrailerModalData | null;
  onClose: () => void;
}

const Backdrop = styled(Box)({
  position: 'fixed',
  inset: 0,
  zIndex: 1350,
  backgroundColor: 'rgba(4, 7, 13, 0.92)',
  backdropFilter: 'blur(6px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
});

const Frame = styled(Box)({
  position: 'relative',
  width: 'min(92vw, 1280px)',
  maxHeight: '88vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '6px',
  overflow: 'hidden',
  backgroundColor: '#07090e',
  border: '1px solid rgba(0, 229, 255, 0.5)',
  boxShadow: '0 0 42px rgba(0, 229, 255, 0.25)',
});

const StyledVideo = styled('video')({
  display: 'block',
  width: '100%',
  maxHeight: '82vh',
  backgroundColor: '#000',
  objectFit: 'contain',
});

const FallbackPoster = styled('img')({
  display: 'block',
  width: '100%',
  maxHeight: '82vh',
  objectFit: 'contain',
  backgroundColor: '#000',
});

const CloseButton = styled('button')(({ theme }) => ({
  position: 'absolute',
  top: '12px',
  right: '12px',
  zIndex: 3,
  width: '38px',
  height: '38px',
  borderRadius: '50%',
  border: `1px solid ${theme.palette.primary.main}`,
  backgroundColor: 'rgba(7, 11, 20, 0.88)',
  color: '#f4f8ff',
  fontSize: '1.3rem',
  lineHeight: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease, color 0.2s ease, transform 0.2s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: '#070b14',
    transform: 'scale(1.05)',
  },
}));

export default function TrailerModal({ trailer, onClose }: TrailerModalProps) {
  useEffect(() => {
    if (!trailer) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [trailer, onClose]);

  if (!trailer) return null;

  return (
    <Backdrop onClick={onClose}>
      <Frame onClick={(e) => e.stopPropagation()}>
        <CloseButton
          type="button"
          aria-label="Close trailer"
          onClick={onClose}
        >
          ×
        </CloseButton>

        {trailer.src ? (
          <StyledVideo
            src={trailer.src}
            poster={trailer.poster}
            controls
            autoPlay
            playsInline
          />
        ) : (
          <FallbackPoster src={trailer.poster} alt={trailer.title} />
        )}

        <Box
          sx={{
            width: '100%',
            px: 2.5,
            py: 1.25,
            bgcolor: 'rgba(11, 15, 25, 0.95)',
            borderTop: '1px solid rgba(0, 229, 255, 0.2)',
            boxSizing: 'border-box',
          }}
        >
          <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 800, lineHeight: 1.2 }}>
            {trailer.title}
          </Typography>
          {trailer.subtitle && (
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.25 }}>
              {trailer.subtitle}
            </Typography>
          )}
          {!trailer.src && (
            <Typography variant="caption" sx={{ color: 'secondary.main', display: 'block', mt: 0.5 }}>
              Add a videoSrc MP4/WebM path to the trailer slide in homeData.ts to play video here.
            </Typography>
          )}
        </Box>
      </Frame>
    </Backdrop>
  );
}