"use client";
import TopSection from "../components/home-page-sections/TopSection.tsx";
import BottomSection from "../components/home-page-sections/BottomSection.tsx";
import ProjectCardsGrid from "../components/home-page-sections/ProjectCardsGrid.tsx";
import HeroBanner from "@/components/Banner/HeroBanner.tsx";

const cards_info = [
  {
    name: "The Inga Foundation",
    description: "Coming Soon!",
    image: "projects/inga.jpg",
    link: "/projects",
  },
  {
    name: "Toronto Rape Crisis Centre",
    description: "Coming Soon!",
    image: "projects/trcc.jpg",
    link: "/projects",
  },
  {
    name: "The Museum of Art and Digital Entertainment (MADE)",
    description: "Coming Soon!",
    image: "projects/made.jpg",
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
