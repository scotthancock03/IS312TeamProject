// src/pages/Home/Home.tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Box, Typography } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos, PlayArrow } from '@mui/icons-material';
import { carouselSlides, previewCards } from './homeData';
import ImageLightbox from '../../components/ImageLightbox';
import type { LightboxImageItem } from '../../components/ImageLightbox';
import TrailerModal from '../../components/TrailerModal';
import type { TrailerModalData } from '../../components/TrailerModal';
import {
  PageContainer,
  CarouselWrapper,
  CarouselImage,
  CarouselOverlay,
  CarouselTitle,
  CarouselSubtitle,
  DotContainer,
  PaginationDot,
  PreviewGrid,
  PreviewCard,
  CardImageThumbnail,
  PreviewCardContent,
  PreviewRole,
  PreviewName,
  PreviewDescription,
} from './Home.styles';

interface CarouselSlideItem {
  act?: string;
  title: string;
  subtitle: string;
  image: string;
  objectPosition?: string;
  isTrailer?: boolean;
  videoSrc?: string;
}

const mobileArrowSx = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 2,
  width: { xs: 28, sm: 34, md: 40 },
  height: { xs: 28, sm: 34, md: 40 },
  p: 0,
  bgcolor: 'rgba(0,0,0,0.6)',
  color: 'primary.main',
  border: '1px solid rgba(0,229,255,0.5)',
  '&:hover': { bgcolor: 'primary.main', color: '#000' },
};

function getClassIdFromRole(role: string): string {
  const normalized = role.toUpperCase();
  if (normalized.includes('TANK')) return 'tank-class';
  if (normalized.includes('FIGHTER')) return 'fighter-class';
  if (normalized.includes('MAGE') || normalized.includes('SUPPORT')) return 'mage-support';
  return 'tank-class';
}

export default function Home() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<LightboxImageItem | null>(null);
  const [activeTrailer, setActiveTrailer] = useState<TrailerModalData | null>(null);

  const slides = carouselSlides as CarouselSlideItem[];
  const isModalOpen = Boolean(lightboxImage) || Boolean(activeTrailer);

  // Automatically cycle through all 6 slides every 5 seconds, pausing while a modal is open
  useEffect(() => {
    if (isModalOpen || slides.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [activeStep, isModalOpen, slides.length]);

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % slides.length);
  };

  const handleBack = () => {
    setActiveStep((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[activeStep] || slides[0];

  const handleSlideClick = () => {
    if (currentSlide.isTrailer) {
      setActiveTrailer({
        src: currentSlide.videoSrc,
        poster: currentSlide.image,
        title: currentSlide.title,
        subtitle: currentSlide.subtitle,
      });
      return;
    }

    setLightboxImage({
      src: currentSlide.image,
      alt: currentSlide.title,
      act: currentSlide.act,
      title: currentSlide.title,
      subtitle: currentSlide.subtitle,
    });
  };

  return (
    <PageContainer>
      {/* 6-Item Carousel Banner (Slide 1: Trailer + 5 Lore Slides) */}
      <CarouselWrapper>
        <CarouselImage
          src={currentSlide.image}
          alt={currentSlide.title}
          sx={{
            objectFit: currentSlide.isTrailer ? 'contain' : 'cover',
            objectPosition: currentSlide.objectPosition || 'center 50%',
            cursor: 'pointer',
          }}
          onClick={handleSlideClick}
        />
        <CarouselOverlay sx={{ pointerEvents: 'none', zIndex: 1 }}>
          {currentSlide.isTrailer && (
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.75,
                px: 1.5,
                py: 0.5,
                mb: 1,
                borderRadius: '999px',
                bgcolor: 'rgba(7, 11, 20, 0.85)',
                border: '1px solid',
                borderColor: 'primary.main',
                color: 'primary.main',
              }}
            >
              <PlayArrow sx={{ fontSize: 18 }} />
              <Typography variant="caption" sx={{ fontWeight: 800, letterSpacing: '0.08em' }}>
                WATCH TRAILER
              </Typography>
            </Box>
          )}
          <CarouselTitle variant="h1">
            {currentSlide.title}
          </CarouselTitle>
          <CarouselSubtitle variant="subtitle1">
            {currentSlide.subtitle}
          </CarouselSubtitle>
        </CarouselOverlay>

        {/* Left Arrow */}
        <IconButton
          onClick={handleBack}
          aria-label="previous slide"
          sx={{ ...mobileArrowSx, left: { xs: 4, sm: 10, md: 20 } }}
        >
          <ArrowBackIosNew sx={{ fontSize: { xs: 13, md: 18 } }} />
        </IconButton>

        {/* Right Arrow */}
        <IconButton
          onClick={handleNext}
          aria-label="next slide"
          sx={{ ...mobileArrowSx, right: { xs: 4, sm: 10, md: 20 } }}
        >
          <ArrowForwardIos sx={{ fontSize: { xs: 13, md: 18 } }} />
        </IconButton>
      </CarouselWrapper>

      {/* 6 Pagination Dots */}
      <DotContainer>
        {slides.map((slide, index) => (
          <PaginationDot
            key={index}
            active={activeStep === index}
            title={slide.isTrailer ? 'Trailer' : `Slide ${index + 1}`}
            onClick={() => setActiveStep(index)}
          />
        ))}
      </DotContainer>

      {/* 3 Split-Preview Cards — clicking anywhere on a card routes to its class & character */}
      <PreviewGrid>
        {previewCards.map((card, idx) => (
          <PreviewCard
            key={idx}
            onClick={() =>
              navigate('/characters', {
                state: {
                  classId: getClassIdFromRole(card.role),
                  characterName: card.name,
                },
              })
            }
          >
            <CardImageThumbnail src={card.img} alt={card.name} />
            <PreviewCardContent>
              <PreviewRole variant="caption">{card.role}</PreviewRole>
              <PreviewName variant="subtitle1">{card.name}</PreviewName>
              <PreviewDescription variant="body2">{card.desc}</PreviewDescription>
            </PreviewCardContent>
          </PreviewCard>
        ))}
      </PreviewGrid>

      <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
      <TrailerModal trailer={activeTrailer} onClose={() => setActiveTrailer(null)} />
    </PageContainer>
  );
}