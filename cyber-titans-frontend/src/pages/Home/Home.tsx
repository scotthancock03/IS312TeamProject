// src/pages/Home/Home.tsx
import { useState, useEffect } from 'react';
import { Typography, IconButton, Button, Box } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { 
  PageContainer, 
  NavbarContainer, 
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

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);

  // Automatically cycle to the next slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);

    // Clean up the timer when the component unmounts
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
      
      {/* Navigation Bar */}
      <NavbarContainer>
        <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.1em' }}>
          CYBER TITANS
        </Typography>
        <Box sx={{ display: 'flex', gap: { xs: 2, md: 5 } }}>
          <Button component={RouterLink} to="/" color="primary">Home</Button>
          <Button component={RouterLink} to="/characters" color="inherit">Characters</Button>
          <Button component={RouterLink} to="/lore" color="inherit">Lore</Button>
          <Button component={RouterLink} to="/preorder" variant="outlined" color="primary" size="small">Pre-Order</Button>
        </Box>
      </NavbarContainer>

      {/* 5-Picture Carousel Banner with side arrows */}
      <CarouselWrapper>
        <CarouselImage 
          src={carouselSlides[activeStep].image} 
          alt={carouselSlides[activeStep].title} 
        />
        <CarouselOverlay>
          <CarouselTitle variant="h1">
            {carouselSlides[activeStep].title}
          </CarouselTitle>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary', mt: 0.5, maxWidth: '700px' }}>
            {carouselSlides[activeStep].subtitle}
          </Typography>
        </CarouselOverlay>

        {/* Left Arrow */}
        <IconButton 
          onClick={handleBack} 
          sx={{ 
            position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', 
            bgcolor: 'rgba(0,0,0,0.6)', color: 'primary.main', border: '1px solid rgba(0,229,255,0.5)', 
            '&:hover': { bgcolor: 'primary.main', color: '#000' } 
          }}
        >
          <ArrowBackIosNew fontSize="small" />
        </IconButton>

        {/* Right Arrow */}
        <IconButton 
          onClick={handleNext} 
          sx={{ 
            position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)', 
            bgcolor: 'rgba(0,0,0,0.6)', color: 'primary.main', border: '1px solid rgba(0,229,255,0.5)', 
            '&:hover': { bgcolor: 'primary.main', color: '#000' } 
          }}
        >
          <ArrowForwardIos fontSize="small" />
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
      <Box sx={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5vw' }}>
        {[
          { 
            name: "NORTON", 
            role: "TANK CLASS", 
            desc: "Monolithic guardian forged from legacy mainframe architecture with Aegis-Gate tower shielding.",
            img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80"
          },
          { 
            name: "HANCOCK III", 
            role: "FIGHTER CLASS", 
            desc: "Apex administrative security robot optimized for high kinetic strike output and heroic precision.",
            img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80"
          },
          { 
            name: "AEGIS", 
            role: "MAGE / SUPPORT", 
            desc: "City-block-scale Titan floating over battlefield deploying hard-light recovery matrices.",
            img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400&q=80"
          }
        ].map((card, idx) => (
          <PreviewCard key={idx}>
            <CardImageThumbnail src={card.img} alt={card.name} />
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <Box>
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
              <Button component={RouterLink} to="/characters" variant="text" color="primary" sx={{ p: 0, minHeight: 0, alignSelf: 'flex-start', fontSize: '0.75rem' }}>
                EXPLORE MORE &gt;
              </Button>
            </Box>
          </PreviewCard>
        ))}
      </Box>

    </PageContainer>
  );
}