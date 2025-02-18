import { Container, Flex, Button } from "@mantine/core";

import "@mantine/core/styles.layer.css";
import "@/components/Banner/Banner.css";

export default function Banner({
  title,
  text,
  button = { text: null, link: null },
}) {
  // button is an optional prop that defines if button exists or not.

  return (
    <Container fluid className="non-hero banner-container">
      <Flex
        justify={"center"}
        align={"center"}
        h={"80%"}
        direction={"column"}
        rowGap={"5px"}
        className="banner-flex"
      >
        <h1
          className="banner-title"
          style={{
            filter: "drop-shadow(0px 3px 1px rgba(0, 0, 0, 0.3)",
          }}
        >
          {title}
        </h1>
        <div
          className="banner-text"
          style={{
            filter: "drop-shadow(0px 3px 1px rgba(0, 0, 0, 0.3)",
          }}
        >
          {text}
        </div>
        {button.text ? (
          <Button
            size={"md"}
            classNames={{ root: "banner-button", label: "banner-button-label" }}
            color="#0078E8"
            variant="filled"
            component="a"
            href={button.link}
            styles={{
              root: {
                border: "3px solid white",
              },
            }}
          >
            {button.text}
          </Button>
        ) : (
          <></>
        )}
      </Flex>
    </Container>
  );
}
