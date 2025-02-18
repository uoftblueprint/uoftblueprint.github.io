import { Container, Flex } from "@mantine/core";
import "@/components/Banner/Banner.css";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <Container fluid className="hero banner-container">
      <Flex
        justify={"center"}
        align={"center"}
        h={"100%"}
        direction={"column"}
        pb="15vh"
      >
        <div className="banner-logo-container">
          <Image
            src="bp_logo_white.svg"
            alt="bp logo"
            fill
            className="banner-logo"
          />
        </div>
        <h1 className="banner-title">Tech for Social Good. </h1>
        <div className="banner-text-container">
          <div className="banner-text">
            Hi! We&apos;re a group of passionate UofT students that build
            software for social good.
          </div>
        </div>
      </Flex>
    </Container>
  );
}
