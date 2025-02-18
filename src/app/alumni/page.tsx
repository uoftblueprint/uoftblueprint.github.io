"use client";

import Banner from "@/components/Banner/Banner";
import TeamCard from "@/team-card/TeamCard";
import { Container, Flex } from "@mantine/core";
import alumniData from "@/data/alumni.json";

const { alumni } = alumniData;

export default function Alumni() {
  return (
    <div>
      <Banner
        title={"Meet our Alumni"}
        text={
          "Special thanks to all who have given their time and effort to our cause for social good. We could not have done it without you!"
        }
      />
      <Flex
        justify={"center"}
        align={"center"}
        direction="column"
        w="100%"
        pos={"relative"}
      >
        <Container className="alumni-group" m={"10vh 0 10vh 0"} w="100%" fluid>
          <TeamCard title="Alumni" team_members={alumni} />
        </Container>
      </Flex>
    </div>
  );
}
