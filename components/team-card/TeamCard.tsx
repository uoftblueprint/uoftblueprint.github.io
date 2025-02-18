"use client";

import Profile from "./Profile";
import { Title, SimpleGrid, Container } from "@mantine/core";
import "@mantine/core/styles.layer.css";
import "./TeamCard.css";

interface TeamMember {
  name: string;
  role: string;
  profilePicture: string;
  linkedinLink?: string;
}

interface TeamCardProps {
  title: string;
  team_members: TeamMember[];
}

function TeamCard({ title, team_members }: TeamCardProps) {
  return (
    <Container size="80%">
      <Title className="team-title" c="#0078E8">
        {title}
      </Title>

      <SimpleGrid
        className="team-grid"
        spacing="lg"
        cols={{ lg: 6, md: 4, sm: 3, xs: 2, base: 2 }}
      >
        {team_members.map((team_member, index) => (
          <Profile
            key={index}
            name={team_member.name}
            role={team_member.role}
            profilePicture={team_member.profilePicture}
            linkedinLink={
              team_member.linkedinLink ? team_member.linkedinLink : ""
            }
          />
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default TeamCard;
