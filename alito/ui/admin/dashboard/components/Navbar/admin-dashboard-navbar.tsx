import { useNavigations } from "@/lib";
import { ROUTES } from "@/lib";
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
  activePath?: string;
}

const ANavbar = ({ menuItems = [], activePath }: ANavbarProps) => {
  const { goDashboard } = useNavigations();
  const { goBlogmgmt } = useNavigations();

  const handleRouting = (path: string) => {
    switch (path) {
      case ROUTES.ADMIN.DASHBOARD:
        goDashboard();
        break;
      case ROUTES.ADMIN.BLOGMGMT:
        goBlogmgmt();
        break;
      default:
        window.location.href = path;
    }
  };
  const storedinfo = localStorage.getItem("admin-info");
  const info = storedinfo ? JSON.parse(storedinfo) : null;

  console.log("The info is:", info);
  return (
    <>
      <NavbarWrapper>
        <Left>Welcome, {info ? info.name : "Admin"}</Left>
        <Right>
          {menuItems.map((mt, index) => (
            <HeadingF
              key={index}
              active={activePath === mt.path}
              onClick={() => handleRouting(mt.path)}
            >
              {mt.label}
            </HeadingF>
          ))}
        </Right>
      </NavbarWrapper>
    </>
  );
};

export { ANavbar };
