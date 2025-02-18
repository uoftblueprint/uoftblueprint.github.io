"use client";
import RoleCard from "../RoleCard/RoleCard";
import { Center, Container, Divider, SimpleGrid, Title, Text } from "@mantine/core";
import "./Roles.css";

// Role information
// const info = [
//   {
//     role: "Role Title (Developer, Project Lead, etc.",
//     link: "<Link to application>",
//   }
// ];
const info = [];

export default function Roles() {
  const hasRoles = info.length > 0;

  return (
    <Container size="xl">
      <Center>
        <Title
          className="open-roles-title"
          size="4vw"
          style={{
            color: "#0078e8",
            padding: "4vw 0vw 2vw 0vw",
          }}
        >
          Open Roles
        </Title>
      </Center>
      <Divider w="30%" color="#e7f3ff" size={"1px"} mx="auto" />
      
      {hasRoles ? (
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 3 }}
          spacing={{ base: 10, sm: "xl" }}
          verticalSpacing={{ base: "md", sm: "xl" }}
          style={{ padding: "2vw 4vw 4vw 4vw" }}
        >
          {info.map((info, index) => (
            <div key={index} className="card-container">
              <RoleCard role={info.role} link={info.link} />
            </div>
          ))}
        </SimpleGrid>
      ) : (
        <Center style={{ padding: "20px" }}>
          <Text size="xl" style={{ color: "#666666" }}>
            We currently do not have any open roles. Please check back later!
          </Text>
        </Center>
      )}
    </Container>
  );
}