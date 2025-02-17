import { Card, CardSection, Image, Button } from "@mantine/core";
import "@mantine/core/styles.layer.css";
import "../projects-card/ProjectsCard.css";

interface ProjectsCardProps {
  name: string;
  description: string;
  image: string;
  link?: string | null;
}

export function ProjectsCard({
  name,
  description,
  image,
  link = null,
}: ProjectsCardProps) {
  return (
    <Card
      padding="lg"
      className="project-card"
      style={{
        paddingBottom: "5%",
      }}
    >
      <CardSection className={"image-container"}>
        <Image src={image} radius="md" alt={name} className={"project-image"} />
      </CardSection>

      <CardSection c="#0078E8" className={"project-name"}>
        {name}
      </CardSection>

      <CardSection c="#0078E8" className={"project-description"}>
        {description}
      </CardSection>

      {link ? (
        <Button
          size="md"
          radius="xl"
          className={"read-more-button"}
          variant="filled"
          color="#228BE6"
          href={link}
          component="a"
          rightSection={
            <Image className={"chevron"} src="/chevron-right.svg" />
          }
        >
          {"Read More"}
        </Button>
      ) : (
        <></>
      )}
    </Card>
  );
}
