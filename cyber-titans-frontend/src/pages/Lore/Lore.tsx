// src/pages/Lore/Lore.tsx
import { useState } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { loreChapters } from './loreData';
import { 
  PageContainer, 
  NavbarContainer, 
  SubNavContainer, 
  SubNavTab, 
  LoreHeroSection, 
  LoreGrid, 
  LoreCard, 
  LoreImage 
} from './Lore.styles';

export default function Lore() {
  const [selectedId, setSelectedId] = useState(loreChapters[0].id);
  const activeChapter = loreChapters.find((c) => c.id === selectedId) || loreChapters[0];

  return (
    <PageContainer>
      
      {/* 1. Main Navigation Bar */}
      <NavbarContainer>
        <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.1em' }}>
          CYBER TITANS
        </Typography>
        <Box sx={{ display: 'flex', gap: { xs: 2, md: 5 } }}>
          <Button component={RouterLink} to="/" color="inherit">Home</Button>
          <Button component={RouterLink} to="/characters" color="inherit">Characters</Button>
          <Button component={RouterLink} to="/lore" color="primary">Lore</Button>
          <Button component={RouterLink} to="/preorder" variant="outlined" color="primary" size="small">Pre-Order</Button>
        </Box>
      </NavbarContainer>

      {/* 2. Secondary Chapter Selection Sub-Bar */}
      <SubNavContainer>
        {loreChapters.map((chap) => (
          <SubNavTab 
            key={chap.id} 
            active={selectedId === chap.id}
            onClick={() => setSelectedId(chap.id)}
          >
            {chap.title}
          </SubNavTab>
        ))}
      </SubNavContainer>

      {/* 3. Selected Chapter Hero Overview */}
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

      {/* 4. Lore Events Grid */}
      <LoreGrid>
        {activeChapter.events.map((event, idx) => (
          <LoreCard key={idx}>
            <LoreImage src={event.image} alt={event.title} />
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 700 }}>
                {event.category}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 600, lineHeight: 1.2 }}>
                {event.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem', mt: 0.5 }}>
                {event.description}
              </Typography>
            </Box>
          </LoreCard>
        ))}
      </LoreGrid>

    </PageContainer>
  );
}