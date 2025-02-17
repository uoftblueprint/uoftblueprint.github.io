import Image from "next/image";
import { Burger, Button, Flex } from "@mantine/core";
import "@/components/Navbar/Navbar.css";
import "@/components/Navbar/SideNavMenu.css";
import "@mantine/core/styles.layer.css";

function Navbar({ opened, toggleOpened, links }) {
  const items = links.map((link) => (
    <Button
      variant="transparent"
      component="a"
      href={link.link}
      color="white"
      classNames={{ label: "nav-link" }}
      key={link.label}
    >
      {link.label}
    </Button>
  ));

  items.push(
    <Button
      variant="filled"
      color="white"
      classNames={{ label: "nav-join-link", root: "nav-join-btn" }}
      key="join"
      h="50px"
      component="a"
      href="/for-students"
    >
      Join our Team!
    </Button>,
  );

  return (
    <header className="nav">
      <a className="nav-logo_tag" href="/">
        <Image
          src="/logo-with-text.svg"
          alt="Blueprint Logo"
          height={30}
          width={150}
        />
      </a>
      <div className="nav-menu_container">
        <Flex visibleFrom="sm" justify={"end"} align={"center"}>
          {items}
        </Flex>
        <Burger
          opened={opened}
          onClick={toggleOpened}
          hiddenFrom="sm"
          size="md"
          color="#FFFFFF"
        />
      </div>
    </header>
  );
}

export default Navbar;
