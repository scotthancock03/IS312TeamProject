// src/pages/Lore/Lore.tsx
import { useState, useEffect } from 'react';
import { Typography, Box, IconButton, useTheme, useMediaQuery } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { loreChapters } from './loreData';
import { 
  PageContainer, 
  SubNavContainer, 
  SubNavTab, 
  LoreHeroSection, 
  CarouselWrapper,
  LoreGrid, 
  LoreCard, 
  LoreImage 
} from './Lore.styles';

const arrowSx = {
  color: 'primary.main',
  border: '1px solid rgba(0, 229, 255, 0.3)',
  backgroundColor: 'rgba(15, 19, 31, 0.8)',
  flexShrink: 0,
  '&.Mui-disabled': { opacity: 0.3 },
};

export default function Lore() {
  const [selectedId, setSelectedId] = useState(loreChapters[0].id);
  const [currentIndex, setCurrentIndex] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const actIdx = Math.max(0, loreChapters.findIndex((c) => c.id === selectedId));
  const activeChapter = loreChapters[actIdx] || loreChapters[0];
  const maxIndex = Math.max(0, activeChapter.events.length - 1);

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedId]);

  const selectAct = (idx: number) => {
    setSelectedId(loreChapters[Math.max(0, Math.min(loreChapters.length - 1, idx))].id);
  };

  const visibleChapters = isMobile ? [activeChapter] : loreChapters;
  const visibleEvents = isMobile
    ? activeChapter.events.slice(currentIndex, currentIndex + 1)
    : activeChapter.events;

  return (
    <PageContainer>

      {/* 1. Secondary Chapter Selection Sub-Bar (Carousel on Mobile) */}
      <SubNavContainer>
        {isMobile && (
          <IconButton size="small" onClick={() => selectAct(actIdx - 1)} disabled={actIdx === 0} aria-label="previous act" sx={arrowSx}>
            <ChevronLeftIcon fontSize="small" />
          </IconButton>
        )}

        {visibleChapters.map((chap) => (
          <SubNavTab key={chap.id} active={selectedId === chap.id} onClick={() => setSelectedId(chap.id)}>
            {chap.title}
          </SubNavTab>
        ))}

        {isMobile && (
          <IconButton size="small" onClick={() => selectAct(actIdx + 1)} disabled={actIdx >= loreChapters.length - 1} aria-label="next act" sx={arrowSx}>
            <ChevronRightIcon fontSize="small" />
          </IconButton>
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
          <IconButton onClick={() => setCurrentIndex((p) => Math.max(0, p - 1))} disabled={currentIndex === 0} aria-label="previous lore event" sx={arrowSx}>
            <ChevronLeftIcon />
          </IconButton>
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
          <IconButton onClick={() => setCurrentIndex((p) => Math.min(maxIndex, p + 1))} disabled={currentIndex >= maxIndex} aria-label="next lore event" sx={arrowSx}>
            <ChevronRightIcon />
          </IconButton>
        )}
      </CarouselWrapper>

    </PageContainer>
  );
}