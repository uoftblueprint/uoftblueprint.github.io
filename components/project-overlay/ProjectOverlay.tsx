import {
  Modal,
  Grid,
  Text,
  Flex,
  Image,
  ActionIcon,
  Avatar,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import "@mantine/core/styles.css";
import "./ProjectOverlay.css";

export type TeamMember = {
  name: string;
  role: string;
  imageSrc: string;
};

type ProjectOverlayProps = {
  name: string;
  years: string[];
  projectDescription: string;
  nonprofitDescription: string;
  imageSrc: string;
  team: TeamMember[];
  webLink: string;
  githubLink: string;
  isOpened: boolean;
  closeModal: () => void;
};

export default function ProjectOverlay(props: ProjectOverlayProps) {
  const isMobile = useMediaQuery(`(max-width: ${"640px"})`);

  return (
    <>
      <Modal
        opened={props.isOpened}
        onClose={props.closeModal}
        size={"xl"}
        centered
        withCloseButton={false}
        radius={15}
      >
        <Grid gutter={"sm"}>
          <Grid.Col span={isMobile ? 12 : 4}>
            <Image radius="md" h={"100%"} src={props.imageSrc} />
          </Grid.Col>
          <Grid.Col span="auto" className="modal-content">
            <Modal.Header className="header">
              <Flex direction={"column"}>
                <Modal.Title className="title">{props.name}</Modal.Title>
                <Text className="years">{props.years.join(", ")}</Text>
              </Flex>
              <Flex gap="xs">
                <ActionIcon
                  component="a"
                  size={45}
                  href={props.webLink}
                  variant="transparent"
                >
                  <Image src="/globe-fill.svg" alt="Web Icon" />
                </ActionIcon>
                <ActionIcon
                  component="a"
                  size={45}
                  href={props.githubLink}
                  variant="transparent"
                >
                  <Image src="/mark-github-24.svg" alt="GitHub Icon" />
                </ActionIcon>
              </Flex>
            </Modal.Header>
            <Modal.Body style={{ gap: "16px" }}>
              <Flex direction={"column"}>
                <Text className="section-header">DESCRIPTION OF PROJECT</Text>
                <Text className="section-description">
                  {props.projectDescription}
                </Text>
              </Flex>
              <Flex direction={"column"}>
                <Text className="section-header">ABOUT NON-PROFIT</Text>
                <Text className="section-description">
                  {props.nonprofitDescription}
                </Text>
              </Flex>
              <Flex direction={"column"}>
                <Text className="section-header">TEAM</Text>
                {TeamsGrid(props.team)}
              </Flex>
            </Modal.Body>
          </Grid.Col>
        </Grid>
      </Modal>
    </>
  );
}

function TeamsGrid(team: TeamMember[]) {
  const teamMembers = team.map((member: TeamMember) => (
    <Grid.Col span={{ xs: 15, sm: 10, md: 8, lg: 8 }} key={member.name}>
      {TeamMember(member.name, member.role, member.imageSrc)}
    </Grid.Col>
  ));
  return (
    <Grid columns={30} justify="center">
      {teamMembers}
    </Grid>
  );
}

function TeamMember(name: string, role: string, imageSrc: string) {
  return (
    <Flex gap={"4"}>
      <Avatar variant="light" radius="xs" src={imageSrc} />
      <Flex direction={"column"} justify={"center"}>
        <Text className="member-name">{name}</Text>
        <Text className="member-role">{role}</Text>
      </Flex>
    </Flex>
  );
}
