// src/pages/Lore/Lore.tsx
import { useState } from 'react';
import { Typography, Box, useTheme, useMediaQuery } from '@mui/material';
import { loreChapters } from './loreData';
import { useCarousel } from '../../hooks/useCarousel';
import CarouselArrow from '../../components/CarouselArrow';
import {
  PageContainer,
  SubNavContainer,
  SubNavTab,
  LoreHeroSection,
  CarouselWrapper,
  LoreGrid,
  LoreCard,
  LoreImage,
} from './Lore.styles';

export default function Lore() {
  const [selectedId, setSelectedId] = useState(loreChapters[0].id);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const actIdx = Math.max(0, loreChapters.findIndex((c) => c.id === selectedId));
  const activeChapter = loreChapters[actIdx] || loreChapters[0];

  const itemsPerPage = isMobile ? 1 : activeChapter.events.length;
  const {
    index: currentIndex,
    maxIndex,
    visibleItems: visibleEvents,
    prev: handlePrev,
    next: handleNext,
  } = useCarousel(activeChapter.events, itemsPerPage, selectedId);

  const selectAct = (idx: number) => {
    setSelectedId(loreChapters[Math.max(0, Math.min(loreChapters.length - 1, idx))].id);
  };

  const visibleChapters = isMobile ? [activeChapter] : loreChapters;

  return (
    <PageContainer>
      {/* 1. Secondary Chapter Selection Sub-Bar (Carousel on Mobile) */}
      <SubNavContainer>
        {isMobile && (
          <CarouselArrow
            direction="left"
            size="small"
            onClick={() => selectAct(actIdx - 1)}
            disabled={actIdx === 0}
            label="previous act"
          />
        )}

        {visibleChapters.map((chap) => (
          <SubNavTab
            key={chap.id}
            active={selectedId === chap.id}
            onClick={() => setSelectedId(chap.id)}
          >
            {chap.title}
          </SubNavTab>
        ))}

        {isMobile && (
          <CarouselArrow
            direction="right"
            size="small"
            onClick={() => selectAct(actIdx + 1)}
            disabled={actIdx >= loreChapters.length - 1}
            label="next act"
          />
        )}
      </SubNavContainer>

      {/* 2. Selected Chapter Hero Overview */}
      <LoreHeroSection>
        <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700 }}>
          {activeChapter.era}
        </Typography>
        <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 700, lineHeight: 1.1 }}>
          {activeChapter.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, fontSize: '0.85rem' }}>
          {activeChapter.overview}
        </Typography>
      </LoreHeroSection>

      {/* 3. Lore Events Carousel on Mobile / Full Row on Desktop */}
      <CarouselWrapper>
        {isMobile && (
          <CarouselArrow
            direction="left"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            label="previous lore event"
          />
        )}

        <LoreGrid>
          {visibleEvents.map((event, idx) => (
            <LoreCard key={`${activeChapter.id}-${currentIndex + idx}`}>
              <LoreImage src={event.image} alt={event.title} />
              <Box sx={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', overflowY: 'auto' }}>
                <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 700 }}>
                  {event.category}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 600, lineHeight: 1.2 }}>
                  {event.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.78rem', mt: 0.5, lineHeight: 1.4 }}>
                  {event.description}
                </Typography>
              </Box>
            </LoreCard>
          ))}
        </LoreGrid>

        {isMobile && (
          <CarouselArrow
            direction="right"
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            label="next lore event"
          />
        )}
      </CarouselWrapper>
    </PageContainer>
  );
}