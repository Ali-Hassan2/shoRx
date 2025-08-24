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

const ANavbar = () => {
  const storedinfo = localStorage.getItem("admin-info");
  const info = storedinfo ? JSON.parse(storedinfo) : null;
  console.log("The info is:", info);
  return (
    <>
      <NavbarWrapper>
        <Left>Welcome, {info ? info.name : "Admin"}</Left>
        <Right></Right>
      </NavbarWrapper>
    </>
  );
};

export { ANavbar };
