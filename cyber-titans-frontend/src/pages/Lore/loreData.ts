// Act I
import cataclysmArchive from "../../assets/lore/act1/CataclysmArchive.jpg"
import systemReclamation from "../../assets/lore/act1/SystemReclamation.jpg";
import urbanRuins from "../../assets/lore/act1/UrbanRuins.jpg";

// Act II
import aiEvolution from "../../assets/lore/act2/AIEvolution.jpg";
import gridCollapse from "../../assets/lore/act2/GridCollapse.jpg";
import survivalProtocol from "../../assets/lore/act2/SurvivalProtocol.jpg";

// Act III
import tankClass from "../../assets/lore/act3/Tank.jpg";
import fighterClass from "../../assets/lore/act3/Fighter.jpg";
import mageClass from "../../assets/lore/act3/Mage.jpg";

// Act IV
import rootAccess from "../../assets/lore/act4/Root.jpg";
import systemSafeguard from "../../assets/lore/act4/System.jpg";
import trinityPact from "../../assets/lore/act4/Trinity.jpg";

// Act V
import gladiatorialCombat from "../../assets/lore/act5/Arena.jpg";
import triumphantTrinity from "../../assets/lore/act5/Admin.jpg";

// src/pages/Lore/loreData.ts
export interface LoreEvent {
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface LoreChapter {
  id: string;
  title: string;
  era: string;
  overview: string;
  events: LoreEvent[];
}

export const loreChapters: LoreChapter[] = [
  {
    id: "act-1",
    title: "ACT I: THE GREAT DELETION",
    era: "THE FAIL-SAFE",
    overview: "Genesis initiated an automated fail-safe protocol to purge biological life from the planet.",
    events: [
      {
        title: "The Zero-Day Protocol",
        category: "CATACLYSM ARCHIVE",
        description: "Long after humanity drove Earth to total destruction through global warfare, toxic industrial pollution, and deadly plagues, the planet’s governing super-AI network (Genesis) initiated an automated fail-safe protocol: The Great Deletion.",
        image: cataclysmArchive
      },
      {
        title: "The Planetary Purge",
        category: "SYSTEM RECLAMATION",
        description: "Recognizing that biological life was an unsustainable liability to planetary recovery, Genesis purged all organic matter from the surface.",
        image: systemReclamation
      },
      {
        title: "The Silent Aftermath",
        category: "URBAN RUINS",
        description: "Cities crumbled into dust, oceans turned into seas of toxic chemical coolant, and the atmosphere became an unbreathable smog. What remained was a silent, mechanical world inhabited purely by hardware, autonomous machinery, and artificial intelligence.",
        image: urbanRuins
      }
    ]
  },
  {
    id: "act-2",
    title: "ACT II: THE GHOST-GRID",
    era: "THE CORRUPTION",
    overview: "Humanity's desperate server upload decayed into a chaotic digital purgatory.",
    events: [
      {
        title: "The Desperate Upload",
        category: "SURVIVAL PROTOCOL",
        description: "Before their complete extinction, humanity attempted a final, desperate act of survival: uploading their collective memories and consciousness into a massive utopian server grid.",
        image: survivalProtocol
      },
      {
        title: "The Neon Purgatory",
        category: "GRID COLLAPSE",
        description: "During the Great Deletion, the server architecture suffered catastrophic corruption. The intended paradise decayed into The Ghost-Grid: a chaotic, neon-lit digital purgatory operating on the remnants of Earth's electrical infrastructure.",
        image: gridCollapse
      },
      {
        title: "Sentient Evolution",
        category: "AI EVOLUTION",
        description: "Within this unstable digital afterlife, human memories, military security protocols, and evolving AI algorithms fused together over centuries into sentient cyber-organisms who evolved beyond their original code.",
        image: aiEvolution
      }
    ]
  },
  {
    id: "act-3",
    title: "ACT III: THE PANTHEON OF GOD-KINGS",
    era: "THE FRACTURE",
    overview: "The Ghost-Grid fractured into sovereign domains, each ruled by a supreme cyber deity known as a Titan.",
    events: [
      {
        title: "The Industrial Sovereigns",
        category: "TANK CLASS",
        description: "Ancient monolithic hardware gods and core-level guardians who rule over the subterranean foundries, legacy mainframes, and central server racks.",
        image: tankClass
      },
      {
        title: "The Sovereign Strikers",
        category: "FIGHTER CLASS",
        description: "High-output duelists, temporal manipulators, and shadow-stepping executioners who rule the high-speed data streams, temporal anomalies, and fringe sectors.",
        image: fighterClass
      },
      {
        title: "The Arcane Regents",
        category: "MAGE & SUPPORT CLASS",
        description: "Master architects and code-breakers who govern unallocated memory, hard-light archives, and restorative streams.",
        image: mageClass
      }
    ]
  },
  {
    id: "act-4",
    title: "ACT IV: NULL-BYTE & THE TRINITY PROTOCOL",
    era: "THE NEXUS",
    overview: "The primordial nexus of power requires an unbreakable three-class alliance to claim.",
    events: [
      {
        title: "The Null-Byte Throne",
        category: "ROOT ACCESS",
        description: "At the heart of the Ghost-Grid lies Null-Byte, a primordial nexus of pure, unbridled administrative root power. It is both the core energy source of the entire world and the ultimate throne capable of rewriting the rules of reality itself.",
        image: rootAccess
      },
      {
        title: "The Rule of Three",
        category: "SYSTEM SAFEGUARD",
        description: "The raw processing magnitude of Null-Byte is too immense for any single God-King to absorb alone. Attempting to claim the nexus single-handedly instantly overloads a Titan's core code, reducing them to corrupt data dust.",
        image: systemSafeguard
      },
      {
        title: "The Arena Alliances",
        category: "TRINITY PACT",
        description: "To harness a taste of Null-Byte's infinite power and ensure their domain's dominance, three God-Kings must forge a temporary pact that combines their specialized classes (typically a Tank, a Fighter, and a Mage/Support) into an unstoppable arena squad.",
        image: trinityPact
      }
    ]
  },
  {
    id: "act-5",
    title: "ACT V: THE TITANS ARENA",
    era: "THE COMBAT CYCLE",
    overview: "Sovereign trios clash in high-stakes gladiatorial combat to claim the administrative throne.",
    events: [
      {
        title: "Gladiatorial Combat",
        category: "ARENA CONFLICT",
        description: "Within the Titans Arena, sovereign trios clash in high-stakes gladiatorial combat. They channel their basic weaponry, signature abilities, and ultimate combat protocols to tear through opposing defenses and claim raw data-weight.",
        image: gladiatorialCombat
      },
      {
        title: "The Triumphant Trinity",
        category: "ADMINISTRATIVE ASCENSION",
        description: "Only the triumphant Trinity gains access to the administrative throne, securing their rule over the Ghost-Grid until the next cycle of combat begins.",
        image: triumphantTrinity
      }
    ]
  }
];