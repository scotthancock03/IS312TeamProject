// src/pages/Characters/Characters.tsx
import { useState } from 'react';
import { Typography, Box, useTheme, useMediaQuery } from '@mui/material';
import { charactersData } from './charactersData';
import { useCarousel } from '../../hooks/useCarousel';
import CarouselArrow from '../../components/CarouselArrow';
import {
  PageContainer,
  SubNavContainer,
  SubNavTab,
  CharacterHeroSection,
  CarouselWrapper,
  SubGrid,
  SubCard,
  SubImage,
} from './Characters.styles';

export default function Characters() {
  const [selectedId, setSelectedId] = useState(charactersData[0].id);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const itemsPerPage = isMobile ? 1 : 2;

  const activeCharacter = charactersData.find((c) => c.id === selectedId) || charactersData[0];

  const {
    index: currentIndex,
    maxIndex,
    visibleItems: visibleSubCharacters,
    prev: handlePrev,
    next: handleNext,
  } = useCarousel(activeCharacter.subCharacters, itemsPerPage, selectedId);

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
        <CarouselArrow
          direction="left"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          label="previous character"
        />

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

        <CarouselArrow
          direction="right"
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          label="next character"
        />
      </CarouselWrapper>
    </PageContainer>
  );
}