// src/pages/Characters/charactersData.ts

// Tank Class Characters
import norton from "../../assets/character/tank/Norton.png";
import anvil from "../../assets/character/tank/Anvil.png";
import tVen from "../../assets/character/tank/TVEN.png";
import sampson from "../../assets/character/tank/Sampson.png";

// Fighter Class Characters
import hancock from "../../assets/character/fighter/Hancock.png";
import vector from "../../assets/character/fighter/Vector.png";
import python from "../../assets/character/fighter/Python.png";
import pablo from "../../assets/character/fighter/Pablo.png";
import mcRam from "../../assets/character/fighter/Mcram.png";
import glitch from "../../assets/character/fighter/Glitch.png";
import kasper from "../../assets/character/fighter/Kasper.png";

// Mage / Support Characters
import aegis from "../../assets/character/mage/Aegis.png";
import decrypter from "../../assets/character/mage/Decrypter.png";
import edmond from "../../assets/character/mage/Edmond.png";
import annie from "../../assets/character/mage/Annie.png";

export interface SubCharacter {
  name: string;
  role: string;
  origin: string;
  basicAttack: string;
  ability: string;
  ultimate: string;
  image: string;
}

export interface MainCharacter {
  id: string;
  name: string;
  classType: string;
  overview: string;
  subCharacters: SubCharacter[];
}

export const charactersData: MainCharacter[] = [
  {
    id: "tank-class",
    name: "TANK CLASS",
    classType: "TANK CLASS",
    overview: "Frontline defense and heavy kinetic bruisers. Monolithic hardware gods and core-level guardians who rule over subterranean foundries, legacy mainframes, and central server racks.",
    subCharacters: [
      {
        name: "NORTON",
        role: "THE GODFATHER OF PROTECTION",
        origin: "Forged from legacy mainframe architecture to treat every battle like an unyielding perimeter.",
        basicAttack: "Aegis Strike — Sweeps heavy cybernetic gauntlets to deal physical damage and generate shields.",
        ability: "Aegis-Gate — Deploys a massive hard-light barrier that absorbs incoming projectile attacks.",
        ultimate: "Firewall Protocol — Locks down local sector pathways, repelling enemies and shielding teammates.",
        image: norton
      },
      {
        name: "ANVIL",
        role: "THE INDUSTRIAL BULWARK",
        origin: "An industrial-grade hardware titan engineered in subterranean foundries to smash grid barriers.",
        basicAttack: "Foundry Slam — Slams an industrial hammer into the terrain to stagger nearby foes.",
        ability: "Siege Charge — Charges forward with reinforced alloy rams to knock back enemy programs.",
        ultimate: "Orbital Strike — Designates a target zone for a heavy thermal beam descending from the ceiling.",
        image: anvil
      },
      {
        name: "T-VEN",
        role: "THE PRE-DELETION APEX",
        origin: "The last human survivor riding atop Harl-E, a colossal sentient AI mecha dire wolf.",
        basicAttack: "Savage Claw — Strikes with razor-sharp cybernetic claws, inflicting bleeding damage.",
        ability: "Primal Overdrive — Boosts movement speed to track invisible units across the grid.",
        ultimate: "Apex Roar — Unleashes a digital howl that terrifies enemies and grants defense buffs.",
        image: tVen
      },
      {
        name: "SAMPSON",
        role: "THE TECTONIC FOSSIL",
        origin: "A colossal dinosaur-like titan of raw armor forged from calcified crusts.",
        basicAttack: "Crustal Tail — Swings an armored tail to knock back surrounding enemies.",
        ability: "Thermal Soak — Absorbs ambient heat and energy blasts to regenerate massive armor.",
        ultimate: "Tectonic Rampage — Fractures and erupts the digital floor beneath enemy feet.",
        image: sampson
      }
    ]
  },
  {
    id: "fighter-class",
    name: "FIGHTER CLASS",
    classType: "FIGHTER CLASS",
    overview: "Sustained damage, duelists, and executioners. High-output duelists, temporal manipulators, and shadow-stepping executioners ruling high-speed data streams and fringe sectors.",
    subCharacters: [
      {
        name: "HANCOCK III",
        role: "THE EXECUTIVE PARAGON",
        origin: "An apex administrative security robot in sleek gold-and-chrome armor optimized for kinetic strikes.",
        basicAttack: "Paragon Blade — Delivers swift, elegant sword slashes with high precision.",
        ability: "Kinetic Dash — Executes a rapid lateral dash to bypass front-line tanks.",
        ultimate: "Executive Execution — Unleashes a combo strike to permanently purge weak targets.",
        image: hancock
      },
      {
        name: "VECTOR",
        role: "THE GRID ARCHITECT",
        origin: "An autonomous core optimization AI commanding high-voltage data scepters.",
        basicAttack: "Data Scepter — Jabs with a crackling energy scepter pulsing electrical damage.",
        ability: "Overvoltage Node — Places a static node that damages enemies and accelerates cooldowns.",
        ultimate: "Grid Rewrite — Alters local battlefield geometry, trapping opponents in a cage.",
        image: vector
      },
      {
        name: "PYTHON",
        role: "THE SERPENTINE RUNTIME ERROR",
        origin: "A limbless serpentine execution protocol spitting recursive neuro-venom exceptions.",
        basicAttack: "Venom Fang — Bites targets to inject lingering errors that drain health.",
        ability: "Constrict — Coils around an enemy program, suppressing movement and casting for 2s.",
        ultimate: "Recursive Overflow — Spits a massive wave of corrupted code that bounces between targets.",
        image: python
      },
      {
        name: "P.A.B.L.O.",
        role: "THE AESTHETIC ASSASSIN",
        origin: "Compiled within Colombia Node mainframe hubs, treating the Ghost-Grid as a canvas.",
        basicAttack: "Chroma Slash — Paints vibrant, razor-sharp light arcs across target enemies.",
        ability: "Canvas Slip — Disappears into digital ink, reappearing behind priority targets.",
        ultimate: "My Muse — Executes a masterpiece strike eliminating marked foes in neon high-contrast.",
        image: pablo
      },
      {
        name: "MC’RAM",
        role: "THE OVERFLOW BRUISER",
        origin: "A high-density cache regulator turning compressed memory into destructive ground slams.",
        basicAttack: "Cache Punch — Delivers heavy, memory-stuffed punches that stagger units.",
        ability: "Buffer Surge — Compresses local data to unleash a shockwave knocking back foes.",
        ultimate: "Memory Dump — Slams the ground with maximum force for a buffer overflow stun.",
        image: mcRam
      },
      {
        name: "GLITCH",
        role: "THE SCRAP-HEAP ANOMALY",
        origin: "A jagged amalgam of discarded code fragments and memory leaks featuring desync blinks.",
        basicAttack: "Fragment Slash — Swings unstable metallic debris in erratic arcs.",
        ability: "Desync Blink — Instantly teleports a short distance, leaving an explosive decoy.",
        ultimate: "Thread-Fork — Splits into temporary clones to confuse enemies and overwhelm defenses.",
        image: glitch
      },
      {
        name: "KASPER",
        role: "THE ROOTKIT TROJAN",
        origin: "A security utility whose architecture was inverted by a rogue payload.",
        basicAttack: "Stealth Shiv — Strikes from the shadows with corrupted administrative tools.",
        ability: "Trojan Injection — Infiltrates an enemy unit, turning their attacks against allies.",
        ultimate: "Total System Compromise — Overrides enemy telemetry, blinding the opposing team.",
        image: kasper
      }
    ]
  },
  {
    id: "mage-support",
    name: "MAGE / SUPPORT",
    classType: "MAGE / SUPPORT",
    overview: "Protectors, crowd control, and restorative anchors. Master architects and code-breakers governing unallocated memory, hard-light archives, and restorative streams.",
    subCharacters: [
      {
        name: "AEGIS",
        role: "THE PROTOCOL SANCTUARY",
        origin: "A towering, city-block-scale Titan floating over the battlefield with recovery matrix streams.",
        basicAttack: "Matrix Ray — Emits focused beams of corrective light to purge minor debuffs.",
        ability: "Recovery Pulse — Disperses self-replicating nanobots to patch compromised armor.",
        ultimate: "Sanctuary Protocol — Creates an enormous invulnerability zone shielding all allies.",
        image: aegis
      },
      {
        name: "DECRYPTER",
        role: "THE VOID CIPHER",
        origin: "A monolithic computational dreadnought casting hex binds from the dark net.",
        basicAttack: "Void Bolt — Fires dark algorithmic pulses that drain enemy energy pools.",
        ability: "Hex Bind — Shackles an enemy program, slowing movement and amplifying damage.",
        ultimate: "Grasping Void — Opens a gravitational rift from the dark net to crush opponents.",
        image: decrypter
      },
      {
        name: "EDMOND",
        role: "THE SYSTEM SIREN",
        origin: "A phantom-like construct emitting hypnotic sub-routines to manipulate enemy code.",
        basicAttack: "Resonance Spire — Projects harmonic light waves dealing magic damage and revealing positions.",
        ability: "Siren_Override — Fires a beam that charms the target, disarming and forcing them to walk toward Edmond.",
        ultimate: "System_Overclock — Overclocks nearby allies' core registers for bonus attack speed and lifesteal.",
        image: edmond
      },
      {
        name: "ANNIE",
        role: "THE FAITHFUL GUARDIAN",
        origin: "A radiant celestial entity built from pure white hard-light arrays and golden telemetry threads.",
        basicAttack: "Devoted Light — Heals allies or applies a 25% movement slow to enemies. Stacking 3 hits stuns.",
        ability: "Unconditional_Bond — Cleanses and absorbs all crowd control/debuffs meant for a tethered ally.",
        ultimate: "Sacred_Recovery — Unlocks when last alive; sacrifices 50% health to instantly resurrect teammates.",
        image: annie
      }
    ]
  }
];