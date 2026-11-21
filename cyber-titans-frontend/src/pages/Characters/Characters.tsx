// src/pages/Characters/Characters.tsx
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, useTheme, useMediaQuery } from '@mui/material';
import { charactersData } from './charactersData';
import { useCarousel } from '../../hooks/useCarousel';
import CarouselArrow from '../../components/CarouselArrow';
import ImageLightbox from '../../components/ImageLightbox';
import type { LightboxImageItem } from '../../components/ImageLightbox';
import {
  PageContainer,
  SubNavContainer,
  SubNavTab,
  CharacterHeroSection,
  CarouselWrapper,
  SubGrid,
  SubCard,
  SubImage,
  CardBody,
  CharacterTitleKicker,
  CharacterNameHeading,
  OriginBio,
  KitList,
  KitRow,
  SlotBadge,
  MoveNameText,
  MoveDescText,
} from './Characters.styles';

interface CharacterRouteState {
  classId?: string;
  characterName?: string;
}

function parseMoveText(raw: string): { moveName: string; moveDesc: string } {
  const parts = raw.split('—');
  if (parts.length >= 2) {
    return {
      moveName: parts[0].trim().replace(/_/g, ' '),
      moveDesc: parts.slice(1).join('—').trim(),
    };
  }
  return { moveName: '', moveDesc: raw.trim() };
}

export default function Characters() {
  const location = useLocation();
  const routeState = (location.state as CharacterRouteState | null) || {};
  const stateClassId = routeState.classId;
  const stateCharacterName = routeState.characterName;

  const [selectedId, setSelectedId] = useState(stateClassId || charactersData[0].id);
  const [lightboxImage, setLightboxImage] = useState<LightboxImageItem | null>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const itemsPerPage = isMobile ? 1 : 2;

  const activeCharacter = charactersData.find((c) => c.id === selectedId) || charactersData[0];

  const {
    index: currentIndex,
    setIndex: setCurrentIndex,
    maxIndex,
    visibleItems: visibleSubCharacters,
    prev: handlePrev,
    next: handleNext,
  } = useCarousel(activeCharacter.subCharacters, itemsPerPage, selectedId);

  useEffect(() => {
    if (stateClassId && charactersData.some((c) => c.id === stateClassId)) {
      setSelectedId(stateClassId);
    }
  }, [stateClassId]);

  useEffect(() => {
    if (!stateCharacterName) return;

    const targetClass =
      charactersData.find((c) => c.id === (stateClassId || selectedId)) || activeCharacter;
    const foundIndex = targetClass.subCharacters.findIndex(
      (sub) => sub.name.toUpperCase() === stateCharacterName.toUpperCase()
    );

    if (foundIndex >= 0) {
      const clampedIndex = Math.min(foundIndex, Math.max(0, targetClass.subCharacters.length - itemsPerPage));
      setCurrentIndex(clampedIndex);
    }
  }, [stateCharacterName, stateClassId, selectedId, itemsPerPage, setCurrentIndex, activeCharacter]);

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
          {visibleSubCharacters.map((sub, idx) => {
            const basic = parseMoveText(sub.basicAttack);
            const ability = parseMoveText(sub.ability);
            const ultimate = parseMoveText(sub.ultimate);

            return (
              <SubCard key={`${activeCharacter.id}-${currentIndex + idx}`}>
                <SubImage
                  src={sub.image}
                  alt={sub.name}
                  onClick={() =>
                    setLightboxImage({
                      src: sub.image,
                      alt: sub.name,
                      act: sub.role,
                      title: sub.name,
                      subtitle: sub.origin,
                    })
                  }
                />
                <CardBody>
                  <CharacterTitleKicker variant="caption">
                    {sub.role}
                  </CharacterTitleKicker>
                  <CharacterNameHeading variant="subtitle1">
                    {sub.name}
                  </CharacterNameHeading>

                  <OriginBio variant="body2">{sub.origin}</OriginBio>

                  <KitList>
                    <KitRow>
                      <SlotBadge>Basic</SlotBadge>
                      {basic.moveName && <MoveNameText>{basic.moveName}:</MoveNameText>}
                      <MoveDescText>{basic.moveDesc}</MoveDescText>
                    </KitRow>

                    <KitRow>
                      <SlotBadge>Ability</SlotBadge>
                      {ability.moveName && <MoveNameText>{ability.moveName}:</MoveNameText>}
                      <MoveDescText>{ability.moveDesc}</MoveDescText>
                    </KitRow>

                    <KitRow>
                      <SlotBadge isUltimate>Ultimate</SlotBadge>
                      {ultimate.moveName && <MoveNameText>{ultimate.moveName}:</MoveNameText>}
                      <MoveDescText>{ultimate.moveDesc}</MoveDescText>
                    </KitRow>
                  </KitList>
                </CardBody>
              </SubCard>
            );
          })}
        </SubGrid>

        <CarouselArrow
          direction="right"
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          label="next character"
        />
      </CarouselWrapper>

      {/* 4. Expanded Image Lightbox */}
      <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </PageContainer>
  );
}