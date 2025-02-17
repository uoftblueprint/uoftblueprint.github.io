import { Container, Title, Text, Image } from "@mantine/core";

export default function TopSection() {
  return (
    <Container
      style={{
        padding: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "50px auto 5% auto",
        color: "#0078e8",
        textAlign: "center",
        paddingBottom: "20px",
      }}
      size="70%"
    >
      <Title style={{ fontSize: "calc(18px + 2vw)" }}>
        Hi! 👋 We’re Blueprint.
      </Title>
      <Text
        style={{
          fontSize: "calc(15px + 0.75vw)",
          maxWidth: "80%",
          paddingBottom: "20px",
        }}
      >
        We’re a group of passionate students at the University of Toronto
        dedicated to building software to give back to our community!
      </Text>
      <Image
        style={{ width: "100%" }}
        alt="Group of People"
        src="/people_images/teamwork.svg"
      ></Image>
    </Container>
  );
}
