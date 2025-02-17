import { Container, Flex, Image } from "@mantine/core";
import "@/for-students-whyjoin/WhyJoin.css";

function WhyJoin({ img }) {
  return (
    <Container size="xl">
      <Flex
        align="center"
        justify="center"
        className="whyjoin"
        direction={{ lg: "row", base: "column" }}
        columnGap={{ md: "60px", base: "30px" }}
      >
        <Container
          w={{ base: "100%" }}
          h={{ base: "100%" }}
          p={0}
          m={30}
          style={{ minWidth: "250px", minHeight: "250px", maxWidth: "400px" }} // Set minimum size for the image container
        >
          <Image
            src={img}
            alt="why join img"
            style={{
              minWidth: "150px",
              minHeight: "150px",
              borderRadius: "10px",
            }} // Set minimum size for the image
          />{" "}
        </Container>
        <Container
          className="whyjoin-text"
          w={{ sm: "100%", base: "100%" }}
          h={{ sm: "100%", base: "auto" }}
          p={0}
        >
          <h2>Why join?</h2>
          <p>
            Interested in making a change in the community around you? Want to
            gain experience working in a software development team? Join us!
          </p>
        </Container>
      </Flex>
    </Container>
  );
}

export default WhyJoin;
