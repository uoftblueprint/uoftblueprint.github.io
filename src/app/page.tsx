"use client";
import TopSection from "./home-page-top-section/TopSection.tsx";
import BottomSection from "./home-page-top-section/BottomSection.tsx";
import ProjectCardsGrid from "./home-page-top-section/ProjectCardsGrid.tsx";
import HeroBanner from "@/components/Banner/HeroBanner";

const cards_info = [
  {
    name: "The Centre for Dreams",
    description:
      "A centralized mobile application to send announcements, track absences, schedule events, and have discussions.",
    image: "projects/centre-for-dreams.jpg",
    link: "/projects",
  },
  {
    name: "The Period Purse",
    description:
      "A Menstrual Tracking application for iOS and Android, built by youth for youth.",
    image: "projects/the-period-purse.jpeg",
    link: "/projects",
  },
  {
    name: "Toronto Community Employment Services",
    description:
      "A public-facing job board where applicants can find jobs to apply for.",
    image: "projects/tces2.jpg",
    link: "/projects",
  },
  {
    name: "City of Brampton",
    description: "A digital queue system for the public sport courts.",
    image: "projects/btq.jpg",
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
