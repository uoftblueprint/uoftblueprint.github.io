"use client";
import TopSection from "../components/home-page-sections/TopSection.tsx";
import BottomSection from "../components/home-page-sections/BottomSection.tsx";
import ProjectCardsGrid from "../components/home-page-sections/ProjectCardsGrid.tsx";
import HeroBanner from "@/components/Banner/HeroBanner.tsx";

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
