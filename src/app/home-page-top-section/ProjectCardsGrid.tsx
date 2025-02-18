import { Container, SimpleGrid, Title } from "@mantine/core";
import { ProjectsCard } from "src/projects-card/ProjectsCard.tsx";

function CardGrid({ cards_info }) {
  // card_info consists of objects which contain the following properties:
  // project image, project title, project description, project link

  return (
    <Container
      className="cards-grid"
      style={{ width: "85%", margin: "0 auto 100px auto" }}
      size="xl"
    >
      <Title
        className="project-cards-title"
        style={{
          textAlign: "center",
          color: "#0078e8",
          fontSize: "calc(20px + 3vw)",
          paddingBottom: "30px",
        }}
      >
        Current Projects
      </Title>
      <SimpleGrid cols={{ sm: 2, base: 1 }} spacing="lg">
        {cards_info.map((project, index) => (
          <ProjectsCard
            key={index}
            name={project.name}
            description={project.description}
            image={project.image}
            link={project.link ? project.link : null}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default CardGrid;
