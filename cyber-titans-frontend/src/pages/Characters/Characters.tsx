// src/pages/Characters/Characters.tsx
import { useState, useEffect } from 'react';
import { Typography, Box, IconButton, useTheme, useMediaQuery } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { charactersData } from './charactersData';
import { 
  PageContainer, 
  SubNavContainer, 
  SubNavTab, 
  CharacterHeroSection, 
  CarouselWrapper,
  SubGrid, 
  SubCard, 
  SubImage 
} from './Characters.styles';

export default function Characters() {
  const [selectedId, setSelectedId] = useState(charactersData[0].id);
  const [currentIndex, setCurrentIndex] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const itemsPerPage = isMobile ? 1 : 2;

  const activeCharacter = charactersData.find((c) => c.id === selectedId) || charactersData[0];

  const maxIndex = Math.max(0, activeCharacter.subCharacters.length - itemsPerPage);

  // Reset pagination index when switching between classes (Tank, Fighter, Mage)
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedId]);

  // Clamp index if screen size changes between 1 and 2 items per page
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleSubCharacters = activeCharacter.subCharacters.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <PageContainer>

      {/* 1. Secondary Character Selection Sub-Bar */}
      <SubNavContainer>
        {charactersData.map((char) => (
          <SubNavTab 
            key={char.id} 
            active={selectedId === char.id}
            onClick={() => setSelectedId(char.id)}
          >
            {char.name}
          </SubNavTab>
        ))}
      </SubNavContainer>

      {/* 2. Selected Character Hero Overview */}
      <CharacterHeroSection>
        <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 700, lineHeight: 1.1 }}>
          {activeCharacter.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, fontSize: '0.85rem' }}>
          {activeCharacter.overview}
        </Typography>
      </CharacterHeroSection>

      {/* 3. Sub-Characters Carousel Grid with Left/Right Arrows */}
      <CarouselWrapper>
        <IconButton 
          onClick={handlePrev} 
          disabled={currentIndex === 0}
          aria-label="previous character"
          sx={{ 
            color: 'primary.main', 
            border: '1px solid rgba(0, 229, 255, 0.3)', 
            backgroundColor: 'rgba(15, 19, 31, 0.8)',
            '&.Mui-disabled': { opacity: 0.3 }
          }}
        >
          <ChevronLeftIcon />
        </IconButton>

        <SubGrid>
          {visibleSubCharacters.map((sub, idx) => (
            <SubCard key={`${activeCharacter.id}-${currentIndex + idx}`}>
              <SubImage src={sub.image} alt={sub.name} />
              <Box sx={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', overflowY: 'auto', pr: 0.5 }}>
                <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 700 }}>
                  {sub.role}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 600, lineHeight: 1.2, mb: 0.5 }}>
                  {sub.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.78rem', mb: 0.5 }}>
                  <strong>Origin:</strong> {sub.origin}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.78rem', mb: 0.5 }}>
                  <strong>Basic Attack:</strong> {sub.basicAttack}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.78rem', mb: 0.5 }}>
                  <strong>Ability:</strong> {sub.ability}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.78rem' }}>
                  <strong>Ultimate:</strong> {sub.ultimate}
                </Typography>
              </Box>
            </SubCard>
          ))}
        </SubGrid>

        <IconButton 
          onClick={handleNext} 
          disabled={currentIndex >= maxIndex}
          aria-label="next character"
          sx={{ 
            color: 'primary.main', 
            border: '1px solid rgba(0, 229, 255, 0.3)', 
            backgroundColor: 'rgba(15, 19, 31, 0.8)',
            '&.Mui-disabled': { opacity: 0.3 }
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </CarouselWrapper>

    </PageContainer>
  );
}