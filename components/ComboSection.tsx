import { AboutSection } from "./AboutSection";
import { FeaturesSection } from "./FeaturesSection";
import { LearningInvitationSection } from "./LearningInvitationSection";
import { MeetSection } from "./MeetSection";
import { ReportsSection } from "./ReportsSection";
import { RequestDemoSection } from "./RequestDemoSection";
import { StatsSection } from "./StatsSection";
import { SuccessStories } from "./SucessStories";

export function ComboSection() {
  return (
    <>
      <AboutSection />
      <SuccessStories />
      <MeetSection />
      <StatsSection />
      <ReportsSection />
      <FeaturesSection />
      <LearningInvitationSection />
      <RequestDemoSection />
    </>
  );
}
