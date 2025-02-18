import { Grid, Image } from "@mantine/core";
import "./logoShowCase.css";
import "@mantine/core/styles.layer.css";

interface ImageRow {
  img: string;
}

const imgRowOne: ImageRow[] = [
  { img: "/logos/meta.svg" },
  { img: "/logos/google.svg" },
  { img: "/logos/stripe.svg" },
  { img: "/logos/microsoft.svg" },
  { img: "/logos/amazon.svg" },
];
//Row one, span = 2.4/12 = 20% of row width
const rowOne = imgRowOne.map((img) => (
  <Grid.Col span={2.4} key={img.img} className="image-container">
    <Image src={img.img} radius={"xs"} fit="contain" />
  </Grid.Col>
));

const imgRowTwo: ImageRow[] = [
  { img: "/logos/intuit.svg" },
  { img: "/logos/intel.svg" },
  { img: "/logos/figma.svg" },
  { img: "/logos/coursera.svg" },
];

// Row two, span =  3/12 = 25% of row width
const rowTwo = imgRowTwo.map((img) => (
  <Grid.Col span={3} key={img.img} className="image-container">
    <Image src={img.img} radius={"xs"} fit="contain" />
  </Grid.Col>
));

const imgRowThree: ImageRow[] = [
  { img: "/logos/rbc.svg" },
  { img: "/logos/citadel.svg" },
  { img: "/logos/square.svg" },
];

//Row three, span = 4/12 = 33% row width
const rowThree = imgRowThree.map((img) => (
  <Grid.Col span={4} key={img.img} className="image-container">
    <Image src={img.img} radius={"xs"} fit="contain" />
  </Grid.Col>
));

const LogoShowCase = () => {
  return (
    <div className="main-container">
      <h1 className="main-text">Our Alumni have gone on to innovate at:</h1>

      <Grid className="grid" grow justify="space-evenly">
        {/* Row 1 */}
        {rowOne}

        {/* Row 2 */}
        {rowTwo}

        {/* Row 3 */}
        {rowThree}
      </Grid>
    </div>
  );
};

export default LogoShowCase;
