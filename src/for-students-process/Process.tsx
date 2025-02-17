import "@/for-students-process/Process.css";
import { Image, Title, Center, Container, SimpleGrid } from "@mantine/core";

function Process({
  applicationImg,
  applicationLink,
  interviewImg,
  interviewLink,
  acceptancesImg,
  acceptancesLink,
}) {
  const info = [
    { title: "Online Application", img: applicationImg, link: applicationLink },
    { title: "Interview", img: interviewImg, link: interviewLink },
    { title: "Acceptances", img: acceptancesImg, link: acceptancesLink },
  ];

  return (
    <Container size="xl" className="process">
      <div className="text-container">
        <Title className="process-title">Process</Title>
        <h1 className="heading-text">
          Here&apos;s an overview of how we hire new members!
        </h1>
      </div>
      <SimpleGrid
        cols={{ base: 1, lg: 3 }}
        spacing={{ base: 10, sm: "xl" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
        style={{ padding: "2vw 4vw 4vw 4vw" }}
      >
        {info.map((info, index) => (
          <div
            key={index}
            className="img-text-container"
            style={{ padding: "2vw" }}
          >
            <Image
              src={info.img}
              alt={info.title + " img"}
              style={{
                minWidth: "150px",
                minHeight: "150px",
                maxWidth: "400px",
                maxHeight: "400px",
                alignContent: "center",
              }}
            />
            <Center>
              <p className="text">{info.title}</p>
            </Center>
          </div>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default Process;
