import { AboutSection } from "./AboutSection";
import { MeetSection } from "./MeetSection";
import { StatsSection } from "./StatsSection";
import { SuccessStories } from "./SucessStories";

export function ComboSection() {
  return (
    <>
      <AboutSection />
      <SuccessStories />
      <MeetSection />
      <StatsSection />
    </>
  );
}
