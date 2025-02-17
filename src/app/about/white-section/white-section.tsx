import {
  Container,
  Stack,
  SimpleGrid,
  Title,
  Text,
  Image,
  Group,
  Button,
  Grid,
} from "@mantine/core";
import "./white-section.css";

export default function WhiteSection() {
  const values_info = [
    { title: "Mission First", img: "about_page/number-1.svg" },
    { title: "Perpetual Growth", img: "about_page/number-2.svg" },
    { title: "Cherish Each Other", img: "about_page/number-3.svg" },
    { title: "Always Innovate", img: "about_page/number-4.svg" },
    { title: "Be Humble", img: "about_page/number-5.svg" },
  ];

  return (
    <>
      <Container className="top-section" size="xl">
        <Title className="about-title top-title">About Us</Title>
        <Text className="heading-text">
          Blueprint strives to make technology accessible and useful for those
          who assist communities and promote public welfare.
        </Text>
        <Image className="top-image" src="/about_page/team_at_work.svg" />
      </Container>

      <Container size="100%" className="bottom-section grey-blue-text">
        <Container size="xl">
          <Stack className="image-wrapper top-wrapper">
            <Image
              className="medal-img overlay star"
              src="./about_page/star.svg"
              alt="star"
            ></Image>
            <Title className="about-title">Our Mission</Title>
            <Text className="heading-text">
              At UofT Blueprint, we want to leverage the tech skills of our
              students and give back to the community around us.
            </Text>
            <Image
              className="mission-image"
              src="./about_page/group_collaboration.jpeg"
              alt="stock photo"
              style={{
                borderRadius: "10px",
              }}
            ></Image>
          </Stack>

          <Stack className="image-wrapper">
            <Image
              className="medal-img overlay"
              src="./about_page/medal-star.svg"
              alt="medal"
            ></Image>
            <Title className="about-title">Our Impact</Title>
            <Text className="heading-text">
              Since 2020, over 100+ students have joined the UofT Blueprint
              family. Together, we have partnered with 10 NPOs over 5 years
              delivering custom-built websites and mobile apps.
            </Text>

            <SimpleGrid
              cols={{ sm: 3, xs: 1 }}
              className="impact-facts"
              justify-content="center"
              wrap-content="wrap"
            >
              <Stack className="impact-number-container">
                <Text c="#4CA3F4" className="impact-number">
                  5
                </Text>
                <Text className="impact-text">years</Text>
              </Stack>

              <Stack className="impact-number-container">
                <Text c="#0078E8" className="impact-number">
                  10
                </Text>
                <Text className="impact-text">NPOs</Text>
              </Stack>

              <Stack className="impact-number-container">
                <Text c="#4CA3F4" className="impact-number">
                  100+
                </Text>
                <Text className="impact-text">students</Text>
              </Stack>
            </SimpleGrid>
          </Stack>

          <Stack className="image-wrapper">
            <Title className="about-title">Our Values</Title>
            <Text className="heading-text">
              Originally defined by Cal Blueprint, we at UofT Blueprint continue
              to follow and uphold the five core Blueprint values.
            </Text>
            <Grid justify="center" gutter="lg" grow>
              {values_info.map((value_info) => (
                <Grid.Col
                  key={value_info.title}
                  span={{ base: 12, md: 6, lg: 4 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={value_info.img}
                    alt="value images"
                    style={{
                      width: "100px",
                      height: "100px",
                      marginBottom: "10px",
                      color: "#0078e8",
                      opacity: 0.2,
                    }}
                  ></Image>
                  <Text className="impact-text">{value_info.title}</Text>
                </Grid.Col>
              ))}
            </Grid>
          </Stack>

          <Stack className="image-wrapper sponsors-section">
            <Title className="about-title">Our Sponsors</Title>
            <Text className="heading-text" mb="30px">
              Thank you to our sponsors for giving us the opportunity to give
              back to our university community by holding events for our club
              members and the greater UofT community!
            </Text>
            <Button
              rightSection={
                <Image className={"arrow"} src="chevron-right.svg" />
              }
              radius="lg"
              href="mailto:contact@uoftblueprint.org"
              component="a"
              target="_blank"
              size="md"
              mb="30px"
            >
              Become a Sponsor
            </Button>
            <Group justify="center" align="center">
              <Image
                className="sponsor-image"
                src="about_page/guidewire.png"
                alt="guidewire"
              ></Image>
              <Image
                className="sponsor-image"
                src="about_page/starterhack.png"
                alt="starterhack"
              ></Image>
            </Group>
          </Stack>
        </Container>
      </Container>
    </>
  );
}
