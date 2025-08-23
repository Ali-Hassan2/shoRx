import { NavbarWrapper, Left, Right } from "./admin-dashboard-navbar.styles";

const ANavbar = () => {
  const storedinfo = localStorage.getItem("admin-info");
  const info = storedinfo ? JSON.parse(storedinfo) : null;
  console.log("The info is:", info);
  return (
    <>
      <NavbarWrapper>
        <Left>Welcome {info ? info.name : "Admin"}</Left>
        <Right></Right>
      </NavbarWrapper>
    </>
  );
};

export { ANavbar };
