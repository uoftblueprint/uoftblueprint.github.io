import { Card, CardSection, Image, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import "@mantine/core/styles.css";
import "../projects-card/ProjectCardWModal.css";
import ProjectOverlay, { TeamMember } from "@/project-overlay/ProjectOverlay";

type ProjectsCardProps = {
  name: string;
  description: string;
  image: string;
  hasOverlay: boolean;
  years: string[];
  projectDescription: string;
  nonprofitDescription: string;
  team: TeamMember[];
  webLink: string;
  githubLink: string;
};

export default function ProjectsCardWModal(
  props: ProjectsCardProps,
): JSX.Element {
  const [isOpened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Card
        padding="lg"
        className="project-card"
        style={{
          paddingBottom: "5%",
        }}
      >
        <CardSection className={"image-container"}>
          <Image
            src={props.image}
            radius="lg"
            alt={props.name}
            className={"image"}
          />
        </CardSection>

        <CardSection c="#0078E8" className={"project-name"}>
          {props.name}
        </CardSection>

        <CardSection c="#0078E8" className={"project-description"}>
          {props.description}
        </CardSection>

        {props.hasOverlay ? (
          <Button
            size="md"
            radius="xl"
            className={"read-more-button"}
            variant="filled"
            color="#228BE6"
            onClick={open}
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
      <ProjectOverlay
        name={props.name}
        years={props.years}
        projectDescription={props.projectDescription}
        nonprofitDescription={props.nonprofitDescription}
        imageSrc={props.image}
        team={props.team}
        webLink={props.webLink}
        githubLink={props.githubLink}
        isOpened={isOpened}
        closeModal={close}
      />
    </>
  );
}
