import {
  NavbarWrapper,
  Left,
  Right,
  HeadingF,
} from "./admin-dashboard-navbar.styles";

interface MenuItems {
  label: string;
  path: string;
}

interface ANavbarProps {
  menuItems?: MenuItems[];
}

const ANavbar = ({ menuItems = [] }: ANavbarProps) => {
  const storedinfo = localStorage.getItem("admin-info");
  const info = storedinfo ? JSON.parse(storedinfo) : null;
  console.log("The info is:", info);
  return (
    <>
      <NavbarWrapper>
        <Left>Welcome, {info ? info.name : "Admin"}</Left>
        <Right>
          {menuItems.map((mt, index) => (
            <HeadingF key={index}>{mt.label}</HeadingF>
          ))}
        </Right>
      </NavbarWrapper>
    </>
  );
};

export { ANavbar };
