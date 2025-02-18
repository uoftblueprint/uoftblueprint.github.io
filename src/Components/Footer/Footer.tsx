import { Container, Group, Anchor } from "@mantine/core";
import "@mantine/core/styles.layer.css";
import "./Footer.css";
import Image from "next/image";

const links = [
  { link: "/about", label: "About" },
  { link: "/projects", label: "Projects" },
  { link: "/team", label: "Team" },
  { link: "/chapters", label: "Chapters" },
  { link: "/join", label: "Join" },
];

const Footer = () => {
  const items = links.map((link) => (
    <Anchor<"a">
      c="white"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
      className="footer-link"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <footer className="main-footer">
      <Container className="footer-menu">
        <a className="logo" href="/">
          <Image
            src="/logo-with-text.svg"
            alt="Blueprint Logo"
            width={200}
            height={40}
            className="logo"
          ></Image>
        </a>
        <Group className="footer-text">{items}</Group>
      </Container>
      <h5 className="copyright-text"> &copy; Blueprint 2023</h5>
    </footer>
  );
};

export default Footer;
