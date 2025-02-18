import { Container, Title, Text, Image, Button, Divider } from "@mantine/core";
import "./BottomSection.css";

export default function BottomSection() {
  return (
    <>
      <div className="desktop-view">
        <Container size="100%" className="bottom-section">
          <Title className="title">How We Do It</Title>
          <Container className="container">
            <Image
              className="image"
              alt="Developer"
              src="/people_images/developer.svg"
            />

            <Image
              className="image"
              alt="Healthcare Worker"
              src="/people_images/medical.svg"
            />
          </Container>

          <Container style={{ alignItems: "flex-start" }} className="container">
            <Container
              style={{ flexDirection: "column" }}
              className="container"
            >
              <Title className="subtitle">Students</Title>
              <Text className="text">
                Do you want to give back to your community while building
                real-life technological solutions for real-life stakeholders?
                Join our growing team of passionate students in tech to make a
                difference!
              </Text>
              <Button
                className="home-button"
                size="md"
                variant="light"
                rightSection={
                  <Image className={"arrow"} src="/icons/arrow-right.svg" />
                }
                component="a"
                href="/for-students"
              >
                Join Us
              </Button>
            </Container>

            <Divider
              orientation="vertical"
              color="#2F80ED"
              className="divider"
            />

            <Container
              style={{ display: "flex", flexDirection: "column" }}
              className="container"
            >
              <Title className="subtitle">Non-Profit Partners</Title>
              <Text className="text">
                Do you want to collaborate with passionate student developers to
                create real-world technological solutions for your organization?
                Partner with us to bring innovative ideas to life helping you
                make a bigger impact on your community!
              </Text>
              <Button
                className="home-button"
                size="md"
                variant="light"
                rightSection={
                  <Image className={"arrow"} src="/icons/arrow-right.svg" />
                }
                component="a"
                href="/for-nonprofits"
              >
                Contact Us
              </Button>
            </Container>
          </Container>
        </Container>
      </div>

      <div className="mobile-view">
        <Container size="100%" className="bottom-section">
          <Title className="title">How We Do It</Title>

          <Container style={{ flexDirection: "column" }} className="container">
            <Image
              className="image"
              alt="Developer"
              src="/people_images/developer.svg"
            />
            <Title className="subtitle">Students</Title>
            <Text className="text">
              Do you want to give back to your community while building
              real-life technological solutions for real-life stakeholders? Join
              our growing team of passionate students in tech to make a
              difference!
            </Text>
            <Button
              className="home-button"
              size="md"
              variant="light"
              rightSection={
                <Image className={"arrow"} src="/icons/arrow-right.svg" />
              }
              component="a"
              href="/for-students"
            >
              Join Us
            </Button>
          </Container>

          <Container style={{ flexDirection: "column" }} className="container">
            <Image
              className="image"
              alt="Healthcare Worker"
              src="/people_images/medical.svg"
            />
            <Title className="subtitle">Non-Profit Partners</Title>
            <Text className="text">
              Do you want to collaborate with passionate student developers to
              create real-world technological solutions for your organization?
              Partner with us to bring innovative ideas to life helping you make
              a bigger impact on your community!
            </Text>
            <Button
              className="home-button"
              size="md"
              variant="light"
              rightSection={
                <Image className={"arrow"} src="/icons/arrow-right.svg" />
              }
              component="a"
              href="/for-nonprofits"
            >
              Contact Us
            </Button>
          </Container>
        </Container>
      </div>
    </>
  );
}
