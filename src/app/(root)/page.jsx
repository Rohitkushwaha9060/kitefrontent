import PageAnimation from "@/components/formerMotion/page";

// Components
import Hero from "@/components/Home/Hero";
import HomeAbout from "@/components/Home/HomeAbout";
import HomeAchievement from "@/components/Home/HomeAchievement";
import HomeCourseSlider from "@/components/Home/HomeCourse";
import HomeNotice from "@/components/Home/HomeNotice";
import HomeOfferSlider from "@/components/Home/HomeOffer";

export const metadata = {
  title: "Home Page",
};

export default function Home() {
  return (
    <section className="container">
      <PageAnimation>
        {/* Hero */}
        <Hero />
        {/* Notice */}
        <HomeNotice />
        {/* About */}
        <HomeAbout />
        {/* Course */}
        <HomeCourseSlider />
        {/* Offer */}
        <HomeOfferSlider />
        {/* Achievement */}
        <HomeAchievement />
      </PageAnimation>
    </section>
  );
}
