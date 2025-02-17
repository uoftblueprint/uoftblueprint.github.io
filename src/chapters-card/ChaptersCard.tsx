import { Card, Anchor } from "@mantine/core";
import "../chapters-card/ChaptersCard.css";

export function ChaptersCard({ name, description, link }) {
  return (
    <Card className={"card"} style={{ height: "100%" }}>
      <Card.Section c="#0078E8" className={"chapter-name"}>
        {name}
      </Card.Section>

      <Card.Section c="#003E77" className={"chapter-description"}>
        {description}
      </Card.Section>

      <Card.Section className="link-container">
        <Anchor
          href={link}
          target="_blank"
          c="#0078E8"
          underline="hover"
          className="card-font"
        >
          Learn more
        </Anchor>
      </Card.Section>
    </Card>
  );
}
