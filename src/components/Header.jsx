import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import ThemeSwitcher from "./ThemeSwitcher";

const links = [
  {
    link: "https://admin-splitter.rozetka.company/lisa/#/request/list/new",
    title: "Lisa",
  },
  {
    link: "https://gomer.rozetka.company/gomer/sellers",
    title: "Sellers",
  },
  {
    link: "https://msg.rozetka.ua/owa/",
    title: "Mail",
  },
  {
    link: "https://sf.rozetka.company/my-folders?field=ID&direction=DESC",
    title: "SF",
  },
];

const Header = () => {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <h2 className="font-bold text-inherit">HFW</h2>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {links.map(({ link, title }) => (
          <NavbarItem key={title}>
            <Link color="primary" href={link} target="_blank">
              {title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <ThemeSwitcher />
    </Navbar>
  );
};
export default Header;
