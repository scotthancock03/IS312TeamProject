// src/pages/Home/Home.tsx
import { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { carouselSlides, previewCards } from './homeData';
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

const mobileArrowSx = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  width: { xs: 28, sm: 34, md: 40 },
  height: { xs: 28, sm: 34, md: 40 },
  p: 0,
  bgcolor: 'rgba(0,0,0,0.6)',
  color: 'primary.main',
  border: '1px solid rgba(0,229,255,0.5)',
  '&:hover': { bgcolor: 'primary.main', color: '#000' },
};

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);

  // Automatically cycle to the next slide every 5 seconds, resetting on manual changes
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [activeStep]);

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % carouselSlides.length);
  };

  const handleBack = () => {
    setActiveStep((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  return (
    <PageContainer>
      {/* 5-Picture Carousel Banner with side arrows */}
      <CarouselWrapper>
        <CarouselImage
          src={carouselSlides[activeStep].image}
          alt={carouselSlides[activeStep].title}
          sx={{ objectPosition: carouselSlides[activeStep].objectPosition || 'center 50%' }}
        />
        <CarouselOverlay>
          <CarouselTitle variant="h1">
            {carouselSlides[activeStep].title}
          </CarouselTitle>
          <CarouselSubtitle variant="subtitle1">
            {carouselSlides[activeStep].subtitle}
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

      {/* 5 Pagination Dots */}
      <DotContainer>
        {carouselSlides.map((_, index) => (
          <PaginationDot
            key={index}
            active={activeStep === index}
            onClick={() => setActiveStep(index)}
          />
        ))}
      </DotContainer>

      {/* 3 Split-Preview Cards */}
      <PreviewGrid>
        {previewCards.map((card, idx) => (
          <PreviewCard key={idx}>
            <CardImageThumbnail src={card.img} alt={card.name} />
            <PreviewCardContent>
              <PreviewRole variant="caption">{card.role}</PreviewRole>
              <PreviewName variant="subtitle1">{card.name}</PreviewName>
              <PreviewDescription variant="body2">{card.desc}</PreviewDescription>
            </PreviewCardContent>
          </PreviewCard>
        ))}
      </PreviewGrid>
    </PageContainer>
  );
}