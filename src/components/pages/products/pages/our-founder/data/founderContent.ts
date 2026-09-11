import {
  Flame,
  Footprints,
  Map as MapIcon,
  Shield,
  Skull,
  Sparkles,
  Sword,
  Swords,
  Users,
  type LucideIcon,
} from "lucide-react";

/**
 * Every value in this file is taken from the uploaded "Founder – The
 * Beginning of Journey" game design document. Nothing here is invented:
 * the document describes a single, complete first-chapter concept, so
 * this content is written as narrative fact, not as a shipped product's
 * marketing claims. No release date, platform, price, or team credit is
 * stated anywhere because the source document does not contain any.
 */

export const gameTitle = "Founder";
export const gameSubtitle = "The Beginning of Journey";
export const category = "Story-driven action-adventure";

export const heroTagline =
  "A boy loses everything to an ancient evil. What he becomes to hunt it down is the story.";

export const heroSummary =
  "Founder – The Beginning of Journey follows an ordinary schoolboy whose family is destroyed by a boksi, a figure from Nepali folklore feared for black magic and necromancy. He survives — and that survival becomes his purpose.";

export interface StoryBeat {
  title: string;
  description: string;
}

export const originStory: StoryBeat[] = [
  {
    title: "An ordinary life",
    description:
      "The game begins with a quiet life — a normal school boy, living an ordinary day.",
  },
  {
    title: "The attack",
    description:
      "A boksi destroys his entire family, leaving behind something darker and unnatural. The boy survives.",
  },
  {
    title: "A purpose from survival",
    description:
      "He doesn't fully understand what happened or why, but he knows one thing clearly: he will find the boksi and end her.",
  },
];

export interface MissionType {
  label: string;
  count: string;
  description: string;
  icon: LucideIcon;
}

export const missionStructure: MissionType[] = [
  {
    label: "Main mission",
    count: "1",
    description: "The single major mission that drives the story forward in each map.",
    icon: Sparkles,
  },
  {
    label: "Side missions",
    count: "4",
    description: "Smaller missions per map for exploring the world beyond the main thread.",
    icon: MapIcon,
  },
  {
    label: "Daily missions",
    count: "8",
    description: "Missions that keep the world active and rewarding between story beats.",
    icon: Footprints,
  },
];

export const worldSummary =
  "The game is structured around exploration. You begin with a single map, slowly opening new regions as the story unfolds. Each new area brings stronger enemies, deeper lore, and new powers — a steady rhythm that always gives you something meaningful to do without losing sight of the main goal.";

export interface Weapon {
  name: string;
  description: string;
  icon: LucideIcon;
}

export const weapons: Weapon[] = [
  {
    name: "Khukuri",
    description:
      "The standout weapon — a curved blade known for its power and symbolism, rooted in Nepali heritage.",
    icon: Sword,
  },
  {
    name: "Katana",
    description: "A different fighting style alongside the khukuri, for varied close-combat approaches.",
    icon: Swords,
  },
];

export const combatPhilosophy =
  "One of the key choices in Founder is what it doesn't include: no modern guns, no robots, no futuristic tech. Combat is grounded in tradition and skill, with weapons inspired by real culture. The focus is on close combat, timing, and mastery — every fight feels personal.";

export interface ElementStage {
  name: string;
  status: "unlocked" | "future";
  meaning: string;
  icon: LucideIcon;
}

export const elements: ElementStage[] = [
  {
    name: "Fire",
    status: "unlocked",
    meaning: "The first element — representing anger, pain, and raw energy, fitting where the character is emotionally at the start.",
    icon: Flame,
  },
  {
    name: "Beyond fire",
    status: "future",
    meaning: "As new maps unlock, so do new elements — each adding new abilities and new ways to interact with enemies.",
    icon: Sparkles,
  },
];

export const elementsSummary =
  "The boy isn't just a fighter — he's changing. Elemental powers aren't given all at once; they're earned, tied to progression and discovery. This creates a sense of growth that mirrors the character's inner transformation.";

export const companionSummary =
  "He's not completely alone. Early in the journey, he meets a companion. This character doesn't just help in combat — they guide him, explain the world, and slowly reveal the truth behind the boksi and the forces at work. The relationship gives the player moments to breathe between battles and is a reminder that this is more than just revenge.";

export interface EnemyType {
  name: string;
  description: string;
  icon: LucideIcon;
}

export const enemies: EnemyType[] = [
  {
    name: "Village boksi",
    description:
      "Smaller but powerful witches who control local areas. Defeating them helps you level up and weaken the influence of dark magic.",
    icon: Skull,
  },
  {
    name: "Elemental bosses",
    description: "Enemies tied to specific powers, testing your mastery of each element.",
    icon: Flame,
  },
  {
    name: "Bandits & robbers",
    description: "Grounded human threats that bring variety to combat.",
    icon: Shield,
  },
  {
    name: "Wild animals",
    description:
      "Snakes, tigers, lions — but not ordinary ones. Some have elemental abilities, making even nature unpredictable.",
    icon: Footprints,
  },
];

export const antagonist = {
  name: "The Queen Boksi",
  description:
    "The main antagonist isn't just another enemy — she's the center of everything. Powerful, mysterious, and deeply connected to the world's darker forces, her presence is felt throughout the journey, not just waiting at the end. Every village freed and every boss defeated brings the boy closer to her — and raises the question of whether he'll still be the same person who started this journey when they finally meet.",
};

export const companion = {
  icon: Users,
};

export const closingStatement =
  "Founder – The Beginning of Journey is about growth through struggle. It mixes adventure, supernatural elements, and cultural inspiration into a world that feels both grounded and mystical — a story about a boy who lost everything, and what he becomes when he gains power.";

export const closingHook = "And this is just the beginning.";