import StoryHero from "./sections/StoryHero";
import StoryBeginning from "./sections/StoryBeginning";
import StoryTurningPoint from "./sections/StoryTurningPoint";
import StoryPurpose from "./sections/StoryPurpose";
import StoryJourney from "./sections/StoryJourney";
import StoryChallenges from "./sections/StoryChallenges";
import StoryToday from "./sections/StoryToday";
import StoryBeliefs from "./sections/StoryBeliefs";
import StoryClosing from "./sections/StoryClosing";

const OurStoryPage = () => {
  return (
    <main className="relative w-full overflow-x-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <StoryHero />
      <StoryBeginning />
      <StoryTurningPoint />
      <StoryPurpose />
      <StoryJourney />
      <StoryChallenges />
      <StoryToday />
      <StoryBeliefs />
      <StoryClosing />
    </main>
  );
};

export default OurStoryPage;