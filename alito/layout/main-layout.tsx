import React from "react";
import { Navbar } from "@/components";

interface MainLayoutProps {
  children: React.ReactNode;
}
const NavbarProps = {
  title: "shoRx",
  home: "Home",
  about: "About",
  blogs: "Blogs",
  contact: "Contact Me",
};
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar {...NavbarProps} />
      <main>{children}</main>
    </>
  );
};

export { MainLayout };
