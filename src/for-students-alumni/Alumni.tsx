import { Center, Title, Grid, Image } from "@mantine/core";
import "./Alumni.css";

const companies = [
  { src: "/logos/meta.svg", alt: "Meta" },
  { src: "/logos/google.svg", alt: "Google" },
  { src: "/logos/stripe.svg", alt: "Stripe" },
  { src: "/logos/microsoft.svg", alt: "Microsoft" },
  { src: "/logos/amazon.svg", alt: "Amazon" },
  { src: "/logos/intuit.svg", alt: "Intuit" },
  { src: "/logos/intel.svg", alt: "Intel" },
  { src: "/logos/figma.svg", alt: "Figma" },
  { src: "/logos/coursera.svg", alt: "Coursera" },
  { src: "/logos/rbc.svg", alt: "RBC" },
  { src: "/logos/citadel.svg", alt: "Citadel" },
  { src: "/logos/square.svg", alt: "Square" },
];

function Alumni() {
  return (
    <div className="alumni">
      <Center>
        <Title className="alumni-title" size="3vw">
          Our Alumni have gone on to innovate at:
        </Title>
      </Center>
      <Center>
        <Grid justify="center" align="center" className="company-grid">
          {companies.map((company, index) => (
            <Grid.Col key={index} span={3}>
              <Image
                src={company.src}
                alt={company.alt}
                className="company-logo"
              />
            </Grid.Col>
          ))}
        </Grid>
      </Center>
    </div>
  );
}

export default Alumni;
