import { Accordion, Container, Title, Divider, Image } from "@mantine/core";
import "./for-students-FAQ.css";

function FaqCard({ faq_info }) {
  const items = faq_info.map((faq, index) => (
    <Accordion.Item className="accordion-item" key={index} value={faq.question}>
      <Accordion.Control className="question">
        <b>{faq.question}</b>
      </Accordion.Control>

      <Accordion.Panel>{faq.answer}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Container className="faq-container" fluid>
      <Title className="faq-title">FAQ</Title>

      <Divider className="divider" my="lg"></Divider>

      <p>
        Here are some frequently asked questions that we’ve compiled! If you
        have further questions, please contact us on our Instagram or
        contact@uoftblueprint.org.
      </p>

      <Accordion variant="separated" chevron={<Image src="chevron-down.png" />}>
        {items}
      </Accordion>
    </Container>
  );
}

export default FaqCard;
