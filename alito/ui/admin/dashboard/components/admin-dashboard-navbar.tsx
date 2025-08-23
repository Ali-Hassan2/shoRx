import { NavbarWrapper, Left, Right } from "./admin-dashboard-navbar.styles";
const ANavbar = () => {
  const info = localStorage.getItem("admin-info");
  console.log("The info is:", info);
  return (
    <>
      <NavbarWrapper>
        <Left></Left>
        <Right></Right>
      </NavbarWrapper>
    </>
  );
};

export { ANavbar };
