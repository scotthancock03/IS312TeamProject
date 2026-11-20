// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { gameTheme } from './theme/gameTheme';
import Home from './pages/Home/Home';
import Characters from './pages/Characters/Characters';
import Lore from './pages/Lore/Lore';
import PreOrder from './pages/PreOrder/PreOrder';
import './App.css';

export default function App() {
  return (
    <ThemeProvider theme={gameTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/lore" element={<Lore />} />
          <Route path="/preorder" element={<PreOrder />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}