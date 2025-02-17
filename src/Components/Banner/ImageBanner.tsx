import { Container } from "@mantine/core";
import "@/components/Banner/Banner.css";

function ImageBanner({ src }) {
  return (
    <Container
      fluid
      className="non-hero banner-container image-banner"
      style={{
        backgroundImage: `linear-gradient(to bottom, #0078e8, rgba(0, 0, 0, 0)), url(${src})`,
      }}
    ></Container>
  );
}

export default ImageBanner;
