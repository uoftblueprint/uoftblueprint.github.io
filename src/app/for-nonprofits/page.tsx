"use client";
import "@/criteria-card/CriteriaCard";
import {
  Container,
  Image,
  SimpleGrid,
  Text,
  Title,
  Stack,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Banner from "@/components/Banner/Banner";
import "@mantine/core/styles.css";
import { CriteriaCard } from "../../criteria-card/CriteriaCard";
import "./for-nonprofits.css";

export default function NonProfitsPage() {
  const isLargeScreen = useMediaQuery("(width: 992px)");

  return (
    <div>
      <Banner
        title="For Nonprofits"
        text="As a partner, Blueprint will work with you to develop technology that turns your vision into a reality,
          completely free of charge!"
      />
      <Container size="xl">
        <Stack align="stretch" justify="center">
          <Container
            className="top-section"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#e7f3ff",
              textAlign: "center",
            }}
          >
            <Title
              style={{
                color: "#0078e8",
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: "calc(15px + 2vw)",
                zIndex: 1,
                padding: "10% 0 10%",
                lineHeight: "normal",
              }}
            >
              Decision Criteria
            </Title>
          </Container>
          <SimpleGrid
            cols={{ base: 1, md: 2 }}
            spacing="xl"
            style={{
              maxWidth: "80vw",
              margin: "auto",
              display: "flex",
              flexDirection: isLargeScreen ? "row" : "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: isLargeScreen ? "50%" : "70%",
                height: "auto",
              }}
              src="people_images/teamwork.svg"
            />
            <Text className={"responsive-text"}>
              Although we want to help as many organizations as possible, we can
              only work with a few nonprofits at a time because of the amount of
              resources each partnership requires. As such, we use the following
              criteria to find projects with the best fit.
            </Text>
          </SimpleGrid>

          <Container fluid>
            <SimpleGrid
              cols={{ base: 1, sm: 2, md: 3 }}
              style={{
                margin: "5vw 5vw 5vw 5vw",
                maxWidth: "1400px",
              }}
              spacing="lg"
            >
              <CriteriaCard
                criteria={"Impact"}
                description={"How much will your project impact the community?"}
                image={"/for-nonprofits/Impact.svg"}
              />
              <CriteriaCard
                criteria={"Necessity"}
                description={
                  "How vital is your project to your non-profit organization?"
                }
                image={"/for-nonprofits/Necessity.svg"}
              />
              <CriteriaCard
                criteria={"Scope"}
                description={
                  "Is your project achievable within the allotted timeline?"
                }
                image={"/for-nonprofits/Scope.svg"}
              />
              <CriteriaCard
                criteria={"Credibility"}
                description={
                  "Is there evidence that your project will have an impact?"
                }
                image={"/for-nonprofits/Credibility.svg"}
              />
              <CriteriaCard
                criteria={"Technical Fit"}
                description={
                  "Does your project use the capabilities of technology?"
                }
                image={"/for-nonprofits/Technical.svg"}
              />
            </SimpleGrid>
          </Container>

          <Container style={{ textAlign: "center" }}>
            <Title
              style={{
                marginTop: "10%",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bolder",
                fontSize: "calc(12px + 2vw)",
              }}
            >
              Ready to make an impact?
            </Title>
          </Container>
          <Container>
            <Text
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "calc(10px + 1vw)",
                margin: "0 0 5vw 0",
                textAlign: "left",
              }}
            >
              Let&apos;s talk about how we can help you! Reach out to us at{" "}
              <a href="mailto:contact@uoftblueprint.org">
                contact@uoftblueprint.org
              </a>{" "}
              or any of our social media accounts.
            </Text>
          </Container>
        </Stack>
      </Container>
    </div>
  );
}
