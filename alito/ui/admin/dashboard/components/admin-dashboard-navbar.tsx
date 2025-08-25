import {
  NavbarWrapper,
  Left,
  Right,
  HeadingF,
} from "./admin-dashboard-navbar.styles";
import { useNavigations } from "@/lib";
interface MenuItems {
  label: string;
  path: string;
}

interface ANavbarProps {
  menuItems?: MenuItems[];
  activePath: string;
}

const ANavbar = ({ menuItems = [], activePath }: ANavbarProps) => {
  const { goDashboard } = useNavigations();
  const storedinfo = localStorage.getItem("admin-info");
  const info = storedinfo ? JSON.parse(storedinfo) : null;
  console.log("The info is:", info);
  return (
    <>
      <NavbarWrapper>
        <Left>Welcome, {info ? info.name : "Admin"}</Left>
        <Right>
          <h2 onClick={goDashboard}>Blogs</h2>
          {menuItems.map((mt, index) => (
            <HeadingF key={index} active={activePath === mt.path}>
              {mt.label}
            </HeadingF>
          ))}
        </Right>
      </NavbarWrapper>
    </>
  );
};

export { ANavbar };
