// src/pages/Characters/Characters.tsx
import { useState } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { charactersData } from './charactersData';
import { 
  PageContainer, 
  NavbarContainer, 
  SubNavContainer, 
  SubNavTab, 
  CharacterHeroSection, 
  SubGrid, 
  SubCard, 
  SubImage 
} from './Characters.styles';

export default function Characters() {
  const [selectedId, setSelectedId] = useState(charactersData[0].id);
  const activeCharacter = charactersData.find((c) => c.id === selectedId) || charactersData[0];

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
            {char.name} ({char.classType})
          </SubNavTab>
        ))}
      </SubNavContainer>

      {/* 3. Selected Character Hero Overview */}
      <CharacterHeroSection>
        <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700 }}>
          {activeCharacter.classType}
        </Typography>
        <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 700, lineHeight: 1.1 }}>
          {activeCharacter.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, fontSize: '0.85rem' }}>
          {activeCharacter.overview}
        </Typography>
      </CharacterHeroSection>

      {/* 4. Sub-Characters Grid with Pictures and Lore Descriptions */}
      <SubGrid>
        {activeCharacter.subCharacters.map((sub, idx) => (
          <SubCard key={idx}>
            <SubImage src={sub.image} alt={sub.name} />
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 700 }}>
                {sub.role}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 600, lineHeight: 1.2 }}>
                {sub.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem', mt: 0.5 }}>
                {sub.description}
              </Typography>
            </Box>
          </SubCard>
        ))}
      </SubGrid>

    </PageContainer>
  );
}