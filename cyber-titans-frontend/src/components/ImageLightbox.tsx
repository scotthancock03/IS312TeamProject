// src/components/ImageLightbox.tsx
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

export interface LightboxImageItem {
  src: string;
  alt: string;
  act?: string;
  title?: string;
  subtitle?: string;
}

interface ImageLightboxProps {
  image: LightboxImageItem | null;
  onClose: () => void;
}

const LightboxBackdrop = styled(Box)({
  position: 'fixed',
  inset: 0,
  zIndex: 1300,
  backgroundColor: 'rgba(4, 7, 13, 0.9)',
  backdropFilter: 'blur(6px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
});

const LightboxFrame = styled(Box)({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '92vw',
  maxHeight: '90vh',
});

const LightboxImage = styled('img')(({ theme }) => ({
  display: 'block',
  width: 'min(92vw, 1320px)',
  maxWidth: '92vw',
  maxHeight: '90vh',
  height: 'auto',
  objectFit: 'contain',
  borderRadius: '6px',
  border: `1px solid ${theme.palette.primary.main}`,
  boxShadow: '0 0 40px rgba(0, 229, 255, 0.24)',
}));

const LightboxCloseButton = styled('button')(({ theme }) => ({
  position: 'absolute',
  top: '12px',
  right: '12px',
  zIndex: 2,
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

const LightboxCaption = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  padding: '18px 22px 14px',
  borderBottomLeftRadius: '6px',
  borderBottomRightRadius: '6px',
  background: 'linear-gradient(180deg, rgba(7, 11, 20, 0) 0%, rgba(7, 11, 20, 0.88) 100%)',
  pointerEvents: 'none',
  [theme.breakpoints.down('sm')]: {
    padding: '12px 14px 10px',
  },
}));

export default function ImageLightbox({ image, onClose }: ImageLightboxProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    if (!image) return;

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
  }, [image, onClose]);

  if (!image) return null;

  const hasCaption = !isMobile && Boolean(image.act || image.title || image.subtitle);

  return (
    <LightboxBackdrop onClick={onClose}>
      <LightboxFrame onClick={(e) => e.stopPropagation()}>
        <LightboxImage src={image.src} alt={image.alt} />
        <LightboxCloseButton
          type="button"
          aria-label="Close image preview"
          onClick={onClose}
        >
          ×
        </LightboxCloseButton>
        {hasCaption && (
          <LightboxCaption>
            {image.act && (
              <Typography
                variant="caption"
                sx={{
                  color: 'secondary.main',
                  fontWeight: 800,
                  letterSpacing: '0.09em',
                  display: 'block',
                  lineHeight: 1.2,
                }}
              >
                {image.act}
              </Typography>
            )}
            {image.title && (
              <Typography
                variant="subtitle1"
                sx={{
                  color: 'primary.main',
                  fontWeight: 800,
                  lineHeight: 1.2,
                  mt: 0.25,
                }}
              >
                {image.title}
              </Typography>
            )}
            {image.subtitle && (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 0.25, lineHeight: 1.3 }}
              >
                {image.subtitle}
              </Typography>
            )}
          </LightboxCaption>
        )}
      </LightboxFrame>
    </LightboxBackdrop>
  );
}