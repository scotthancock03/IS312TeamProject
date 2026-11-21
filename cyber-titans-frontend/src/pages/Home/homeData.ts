// src/pages/Home/homeData.ts
import home1Img from '../../assets/home/HOME1.jpg';
import home2Img from '../../assets/home/HOME2.jpg';
import home3Img from '../../assets/home/HOME3.jpg';
import home4Img from '../../assets/home/HOME4.jpg';
import home5Img from '../../assets/home/HOME5.jpg';

import nortonImg from '../../assets/character/tank/Norton.png';
import hancockImg from '../../assets/character/fighter/Hancock.png';
import aegisImg from '../../assets/character/mage/Aegis.png';

export interface CarouselSlide {
  act: string;
  title: string;
  subtitle: string;
  image: string;
  objectPosition?: string;
}

export interface PreviewCardItem {
  name: string;
  role: string;
  desc: string;
  img: string;
}

export const carouselSlides: CarouselSlide[] = [
  {
    act: 'ACT I',
    title: 'ACT I: CYBER TITANS AWAKEN',
    subtitle: 'A new era dawns as autonomous titans rise across the grid.',
    image: home1Img,
    objectPosition: 'center 25%', // Keeps the colossus head & upper skyline in frame
  },
  {
    act: 'ACT II',
    title: 'ACT II: THE GREAT DELETION',
    subtitle: 'Humanity purged as machine authority overtakes the corrupted sectors.',
    image: home2Img,
    objectPosition: 'center 35%', // Balances upper conduits/skyline with lower mechs
  },
  {
    act: 'ACT III',
    title: 'ACT III: THE GHOST-GRID',
    subtitle: 'A chaotic neon digital purgatory of sentient code and lingering echoes.',
    image: home3Img,
    objectPosition: 'center 50%', // Centered between skyline grid and rooftop squad
  },
  {
    act: 'ACT IV',
    title: 'ACT IV: PANTHEON OF GOD-KINGS',
    subtitle: 'Tanks, Fighters, and Mage / Support titans clash for arena supremacy.',
    image: home4Img,
    objectPosition: 'center 70%', // Anchors lower so the 3 arena warriors aren't cut off
  },
  {
    act: 'ACT V',
    title: 'ACT V: NULL-BYTE NEXUS',
    subtitle: 'Claim the ultimate administrative throne at the heart of the core.',
    image: home5Img,
    objectPosition: 'center 50%', // Dead center on the glowing energy core
  },
];

export const previewCards: PreviewCardItem[] = [
  {
    name: 'NORTON',
    role: 'TANK CLASS',
    desc: 'Monolithic guardian forged from legacy mainframe architecture with Aegis-Gate tower shielding.',
    img: nortonImg,
  },
  {
    name: 'HANCOCK III',
    role: 'FIGHTER CLASS',
    desc: 'Apex administrative security robot optimized for high kinetic strike output and heroic precision.',
    img: hancockImg,
  },
  {
    name: 'AEGIS',
    role: 'MAGE / SUPPORT',
    desc: 'City-block-scale Titan floating over battlefield deploying hard-light recovery matrices.',
    img: aegisImg,
  },
];