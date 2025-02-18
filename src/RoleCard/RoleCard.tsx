import { Card, Image, Text, Button, Center } from "@mantine/core";
import "./RoleCard.css";

export default function RoleCard({ role, link }) {
  return (
    <Card className="roleCard" shadow="lg" radius="xl" p="xl">
      <Center>
        <Image className="moniter" src="/monitor.svg" />
      </Center>
      <Center my="xs">
        <Text c="#0078E8" fw={500} className="roleTitle">
          {role}
        </Text>
      </Center>
      <Center>
        <Button
          size="md"
          radius="xl"
          className="apply-button"
          variant="filled"
          color="#228BE6"
          ref={link}
          component="a"
          rightSection={<Image className="chevron" src="/chevron-right.svg" />}
        >
          Apply
        </Button>
      </Center>
    </Card>
  );
}
