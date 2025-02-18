"use client";
import "@/app/chapters/chapters.css";
import Banner from "@/components/Banner/Banner";
import { ChaptersCard } from "@/chapters-card/ChaptersCard";
import { Container, SimpleGrid, Stack } from "@mantine/core";

//CANADA
const infoCAN = [
  {
    title: "University of Waterloo",
    description:
      "UWaterloo was the first Blueprint chapter, founded in 2015 🍁",
    link: "https://uwblueprint.org/",
  },
  {
    title: "University of Toronto",
    description:
      "The second Canadian chapter to be established, started in 2020 🌿",
    link: "https://uoftblueprint.org/",
  },
  {
    title: "Carleton University",
    description: "The third Blueprint chapter in Canada 🍂",
    link: "https://carletonblueprint.org/",
  },
];

const rowCAN = infoCAN.map((info) => (
  <div
    key={info.title}
    className={"card"}
    style={{ display: "flex", flexDirection: "column", height: "100%" }}
  >
    <ChaptersCard
      name={info.title}
      description={info.description}
      link={info.link}
    ></ChaptersCard>
  </div>
));

//USA
const infoUSA = [
  {
    title: "UC Berkley",
    description: "Blueprint was founded at UC Berkeley in Spring 2013 🏡",
    link: "https://calblueprint.org/",
  },
  {
    title: "UCLA",
    description:
      "Blueprint at the University of California, Los Angeles was established in 2019 🚀",
    link: "https://lablueprint.org/",
  },
  {
    title: "UC Irvine",
    description:
      "Our second Southern California Blueprint chapter was established in 2020 ♥️",
    link: "https://blueprintatuci.github.io/",
  },
  {
    title: "University of Alabama",
    description:
      "Blueprint at University of Alabama was established in 2024 ✨",
    link: "https://website.sdwight.workers.dev/",
  },
  {
    title: "University of Colorado Boulder",
    description:
      "Blueprint was founded at University of Colorado Boulder in 2020 💕",
    link: "https://blueprintboulder.org/",
  },
];

const rowUSA = infoUSA.map((info) => (
  <div
    key={info.title}
    className={"card"}
    style={{ display: "flex", flexDirection: "column", height: "100%" }}
  >
    <ChaptersCard
      name={info.title}
      description={info.description}
      link={info.link}
    ></ChaptersCard>
  </div>
));

export default function ChaptersPage() {
  return (
    <div>
      <Banner
        title={"Chapters"}
        text={
          "Blueprint was founded at UC Berkeley in Spring 2013. Since then they've started scaling their impact and further mission by establishing chapters in different colleges around the world, including us!"
        }
        button={{
          text: "Start a blueprint Chapter!",
          link: "https://calblueprint.org/chapters#interest",
        }}
      ></Banner>

      <Container size="lg" className="responsive-container" fluid>
        <h1 className="text">🇨🇦 Canada</h1>

        <Stack className="chapters-page-main" gap="md">
          <SimpleGrid
            cols={{ base: 1, xs: 2, md: 3 }}
            spacing={"xl"}
            verticalSpacing={{ base: "md", sm: "xl" }}
          >
            {rowCAN}
          </SimpleGrid>
        </Stack>

        <h1 className="text">🇺🇸 USA</h1>

        <Stack className="chapters-page-main" gap="md">
          <SimpleGrid
            cols={{ base: 1, xs: 2, md: 3 }}
            spacing={"xl"}
            verticalSpacing={{ base: "md", sm: "xl" }}
          >
            {rowUSA}
          </SimpleGrid>
        </Stack>
      </Container>
    </div>
  );
}
