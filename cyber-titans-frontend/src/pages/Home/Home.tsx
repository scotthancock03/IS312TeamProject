// src/pages/Home/Home.tsx
import { useState, useEffect } from 'react';
import { Typography, IconButton, Box } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

// Import local character thumbnail assets matching your characters page
import nortonImg from "../../assets/character/tank/Norton.png";
import hancockImg from "../../assets/character/fighter/Hancock.png";
import aegisImg from "../../assets/character/mage/Aegis.png";

import { 
  PageContainer, 
  CarouselWrapper, 
  CarouselImage, 
  CarouselOverlay, 
  CarouselTitle, 
  DotContainer, 
  PaginationDot,
  PreviewCard,
  CardImageThumbnail
} from './Home.styles';

const carouselSlides = [
  { title: "CYBER TITANS", subtitle: "A NEW ERA AWAKES", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80" },
  { title: "ACT I: THE GREAT DELETION", subtitle: "Humanity purged. Autonomous machines rule the grid.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80" },
  { title: "THE GHOST-GRID", subtitle: "A chaotic neon digital purgatory of sentient code.", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1400&q=80" },
  { title: "PANTHEON OF GOD-KINGS", subtitle: "Tanks, Fighters, and Mages clash for arena supremacy.", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1400&q=80" },
  { title: "NULL-BYTE NEXUS", subtitle: "Claim the ultimate administrative throne.", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80" },
];

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

  // Automatically cycle to the next slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

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
        />
        <CarouselOverlay
          sx={{
            px: { xs: 5, sm: 7, md: 6 },
          }}
        >
          <CarouselTitle
            variant="h1"
            sx={{
              fontSize: { xs: '1.1rem', sm: '1.55rem', md: 'clamp(1.4rem, 3vw, 2.6rem)' },
              lineHeight: 1.15,
            }}
          >
            {carouselSlides[activeStep].title}
          </CarouselTitle>
          <Typography
            variant="subtitle1"
            sx={{
              color: 'text.secondary',
              mt: 0.5,
              maxWidth: '700px',
              fontSize: { xs: '0.7rem', sm: '0.88rem', md: '1rem' },
              lineHeight: 1.25,
            }}
          >
            {carouselSlides[activeStep].subtitle}
          </Typography>
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

      {/* 3 Split-Preview Cards without Explore More buttons */}
      <Box sx={{ width: '100%', display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: { xs: '1.1vh', md: '1.5vw' } }}>
        {[
          { 
            name: "NORTON", 
            role: "TANK CLASS", 
            desc: "Monolithic guardian forged from legacy mainframe architecture with Aegis-Gate tower shielding.",
            img: nortonImg
          },
          { 
            name: "HANCOCK III", 
            role: "FIGHTER CLASS", 
            desc: "Apex administrative security robot optimized for high kinetic strike output and heroic precision.",
            img: hancockImg
          },
          { 
            name: "AEGIS", 
            role: "MAGE / SUPPORT", 
            desc: "City-block-scale Titan floating over battlefield deploying hard-light recovery matrices.",
            img: aegisImg
          }
        ].map((card, idx) => (
          <PreviewCard key={idx}>
            <CardImageThumbnail src={card.img} alt={card.name} />
            <Box sx={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
              <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '0.05em' }}>
                {card.role}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 600, lineHeight: 1.2 }}>
                {card.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem', mt: 0.5, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {card.desc}
              </Typography>
            </Box>
          </PreviewCard>
        ))}
      </Box>

    </PageContainer>
  );
}