import { Accordion, Container, Title, Divider, Image } from "@mantine/core";
import "./FaqCard.css";

function FaqCard({ faq_info }) {
  const items = faq_info.map((faq) => (
    <Accordion.Item
      className="accordion-item"
      key={faq.key}
      value={faq.question}
    >
      <Accordion.Control className="question">
        <b>{faq.question}</b>
      </Accordion.Control>

      <Accordion.Panel className="answer">{faq.answer}</Accordion.Panel>
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

      <Accordion
        variant="separated"
        chevron={<Image className="chevron" src="/chevron-down.png" />}
      >
        {items}
      </Accordion>
    </Container>
  );
}

export default FaqCard;
