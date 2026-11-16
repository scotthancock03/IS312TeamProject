// src/pages/Characters/Characters.tsx
import { useState, useEffect } from 'react';
import { Typography, Button, Box, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { charactersData } from './charactersData';
import { 
  PageContainer, 
  NavbarContainer, 
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

  const activeCharacter = charactersData.find((c) => c.id === selectedId) || charactersData[0];

  // Reset pagination index when switching between classes (Tank, Fighter, Mage)
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedId]);

  const itemsPerPage = 2; // Changed from 3 to 2 per page
  const maxIndex = Math.max(0, activeCharacter.subCharacters.length - itemsPerPage);

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
      
      {/* 1. Main Navigation Bar */}
      <NavbarContainer>
        <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.1em' }}>
          CYBER TITANS
        </Typography>
        <Box sx={{ display: 'flex', gap: { xs: 2, md: 5 } }}>
          <Button component={RouterLink} to="/" color="inherit">Home</Button>
          <Button component={RouterLink} to="/characters" color="primary">Characters</Button>
          <Button component={RouterLink} to="/lore" color="inherit">Lore</Button>
          <Button component={RouterLink} to="/preorder" variant="outlined" color="primary" size="small">Pre-Order</Button>
        </Box>
      </NavbarContainer>

      {/* 2. Secondary Character Selection Sub-Bar */}
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

      {/* 3. Selected Character Hero Overview */}
      <CharacterHeroSection>
        <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 700, lineHeight: 1.1 }}>
          {activeCharacter.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, fontSize: '0.85rem' }}>
          {activeCharacter.overview}
        </Typography>
      </CharacterHeroSection>

      {/* 4. Sub-Characters Carousel Grid with Left/Right Arrows */}
      <CarouselWrapper>
        <IconButton 
          onClick={handlePrev} 
          disabled={currentIndex === 0}
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
            <SubCard key={idx}>
              <SubImage src={sub.image} alt={sub.name} />
              <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', overflowY: 'auto', pr: 1 }}>
                <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 700 }}>
                  {sub.role}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 600, lineHeight: 1.2, mb: 0.5 }}>
                  {sub.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem', mb: 0.5 }}>
                  <strong>Origin:</strong> {sub.origin}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem', mb: 0.5 }}>
                  <strong>Basic Attack:</strong> {sub.basicAttack}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem', mb: 0.5 }}>
                  <strong>Ability:</strong> {sub.ability}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                  <strong>Ultimate:</strong> {sub.ultimate}
                </Typography>
              </Box>
            </SubCard>
          ))}
        </SubGrid>

        <IconButton 
          onClick={handleNext} 
          disabled={currentIndex >= maxIndex}
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