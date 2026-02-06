"use client";

import Banner from "@/components/Banner/Banner";
import TeamCard from "@/components/team-card/TeamCard";
import { Button, Container, Divider, Flex, Text, Title } from "@mantine/core";
import membersData from "@/data/current_members.json";

const { members_inga, members_trcc, members_made, members_exec } = membersData;

export default function TeamPage() {
  return (
    <div>
      <Banner
        title={"Meet our Team"}
        text={
          "We're aiming to change our surrounding community, one Blueprint at a time! Meet the 2025-2026 project teams!"
        }
      />
      <Flex
        justify={"center"}
        align={"center"}
        direction="column"
        w="100%"
        pos={"relative"}
      >
        <Container m={"10vh 0 10vh 0"} w="100%" fluid>
          <TeamCard title="The Inga Foundation" team_members={members_inga} />
        </Container>

        <Divider w="40%" color="#0078E8" size={"2px"} />

        <Container m={"10vh 0 10vh 0"} w="100%" fluid>
          <TeamCard
            title="Toronto Rape Crisis Centre"
            team_members={members_trcc}
          />
        </Container>

        <Divider w="40%" color="#0078E8" size={"2px"} />

        <Container m={"10vh 0 10vh 0"} w="100%" fluid>
          <TeamCard
            title="The Museum of Art and Digital Entertainment (MADE)"
            team_members={members_made}
          />
        </Container>

        <Divider w="40%" color="#0078E8" size={"2px"} />

        <Container m={"10vh 0 10vh 0"} w="100%" fluid>
          <TeamCard title="Executive Team" team_members={members_exec} />
        </Container>

        <Divider w="40%" color="#0078E8" size={"2px"} />

        <Container className="alumni-button" m={"10vh 0 10vh 0"} fluid>
          <Container size="80%">
            <Title className="team-title" c="#0078E8">
              Alumni
            </Title>
            <Text
              style={{ fontSize: "calc(12px + 0.45vw)", marginBottom: "20px" }}
            >
              We would not be here without all of our wonderful alumni! Check
              them out here.
            </Text>
            <Button
              component="a"
              href="/alumni"
              color="#0078E8"
              size="lg"
              radius={40}
            >
              View Blueprint Alumni
            </Button>
          </Container>
        </Container>
      </Flex>
    </div>
  );
}
