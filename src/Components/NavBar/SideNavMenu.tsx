import { Button } from "@mantine/core";
import "@/components/Navbar/SideNavMenu.css";

function SideNavMenu({ links }) {
  const items = links.map((link) => (
    <Button
      variant="transparent"
      component="a"
      href={link.link}
      color="white"
      classNames={{ label: "nav-link", root: "side-nav-link" }}
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
    <div className="side-nav">
      <div className="side-menu">{items}</div>
    </div>
  );
}

export default SideNavMenu;
