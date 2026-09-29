"use client";
import TopSection from "../components/home-page-sections/TopSection.tsx";
import BottomSection from "../components/home-page-sections/BottomSection.tsx";
import ProjectCardsGrid from "../components/home-page-sections/ProjectCardsGrid.tsx";
import HeroBanner from "@/components/Banner/HeroBanner.tsx";

const cards_info = [
  {
    name: "The Inga Foundation",
    description: "A data management and visualization platform tracking environmental impact.",
    image: "projects/inga.jpg",
    link: "/projects",
  },
  {
    name: "The Period Purse",
    description: "A native iOS rebuild of Menstruation Nation with modern tracking and educational content.",
    image: "projects/the-period-purse.jpeg",
    link: "/projects",
  },
  {
    name: "Periods for All",
    description: "An accessible period tracking app designed for people with disabilities.",
    image: "projects/periods-for-all.jpg",
    link: "/projects",
  },
  {
    name: "Canada Basketball",
    description: "A live box-score and performance analytics platform for youth camps and coaching staff.",
    image: "projects/canada-basketball.jpg",
    link: "/projects",
  },
];

export default function Home() {
  return (
    <>
      <HeroBanner />
      <TopSection />
      <BottomSection />
      <ProjectCardsGrid cards_info={cards_info}></ProjectCardsGrid>
    </>
  );
}
