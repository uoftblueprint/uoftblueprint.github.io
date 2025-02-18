import { Text, Image, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import "@mantine/core/styles.layer.css";

interface CriteriaCardProps {
  criteria: string;
  description: string;
  image: string;
}

export function CriteriaCard({
  criteria,
  description,
  image,
}: CriteriaCardProps) {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Image
        src={image}
        style={{
          width: "calc(20px + 2vw)",
          height: "auto",
        }}
        alt={criteria}
        className={"project-image"}
      />
      <div
        style={{
          width: isSmallScreen ? "calc(50vw)" : "calc(200px + 2vw)",
          paddingLeft: isSmallScreen ? "calc(5vw)" : "calc(10px + 1vw)",
        }}
      >
        <Title
          style={{
            color: "#0078e8",
            fontFamily: "Poppins, sans-serif",
            fontSize: "calc(14px + 1vw)",
            fontWeight: "bold",
            margin: "1.5vw 0 0.5vw 0",
            textAlign: "center",
          }}
        >
          {criteria}
        </Title>
        <Text
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "calc(12px + 0.5vw)",
            textAlign: "center",
          }}
        >
          {description}
        </Text>
      </div>
    </div>
  );
}
