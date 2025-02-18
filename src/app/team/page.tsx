"use client";

import Banner from "@/components/Banner/Banner";
import TeamCard from "@/team-card/TeamCard";
import { Button, Container, Divider, Flex, Text, Title } from "@mantine/core";
import membersData from "@/data/current_members.json";

const {
  members_btq,
  members_cfd,
  members_tces,
  members_tpp,
  members_int,
  members_osc,
  members_exec,
} = membersData;

export default function TeamPage() {
  return (
    <div>
      <Banner
        title={"Meet our Team"}
        text={
          "We're aiming to change our surrounding community, one Blueprint at a time! Meet the 2024-2025 project teams!"
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
          <TeamCard title="City of Brampton" team_members={members_btq} />
        </Container>

        <Divider w="40%" color="#0078E8" size={"2px"} />

        <Container m={"10vh 0 10vh 0"} w="100%" fluid>
          <TeamCard title="Center for Dreams" team_members={members_cfd} />
        </Container>

        <Divider w="40%" color="#0078E8" size={"2px"} />

        <Container m={"10vh 0 10vh 0"} w="100%" fluid>
          <TeamCard
            title="Toronto Community Employment Services"
            team_members={members_tces}
          />
        </Container>

        <Divider w="40%" color="#0078E8" size={"2px"} />

        <Container m={"10vh 0 10vh 0"} w="100%" fluid>
          <TeamCard title="The Period Purse" team_members={members_tpp} />
        </Container>

        <Divider w="40%" color="#0078E8" size={"2px"} />

        <Container m={"10vh 0 10vh 0"} w="100%" fluid>
          <TeamCard title="Internal" team_members={members_int} />
        </Container>

        <Divider w="40%" color="#0078E8" size={"2px"} />

        <Container m={"10vh 0 10vh 0"} w="100%" fluid>
          <TeamCard
            title="Open-Source Contributors x Mozilla"
            team_members={members_osc}
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
