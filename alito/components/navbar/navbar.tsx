import React from "react";
import {
  NavbarWrapper,
  LeftSide,
  Title,
  Registered,
  RightSide,
  Anchor,
} from "./navbar.style";
import { useRouter } from "next/navigation";

interface NavbarProps {
  title: string;
  home: string;
  about: string;
  blogs: string;
  contact: string;
}
const Navbar = ({ title, home, about, blogs, contact }: NavbarProps) => {
  const router = useRouter();
  const handleRouting = (path: string) => {
    router.push(path);
  };
  return (
    <>
      <NavbarWrapper>
        <LeftSide>
          <Title>
            {title}
            <Registered>&reg;</Registered>
          </Title>
        </LeftSide>
        <RightSide>
          <Anchor onClick={() => handleRouting("/")}>{home}</Anchor>
          <Anchor onClick={() => handleRouting("/about")}>{about}</Anchor>
          <Anchor onClick={() => handleRouting("/blogs")}>{blogs}</Anchor>
          <Anchor onClick={() => handleRouting("/contact")}>{contact}</Anchor>
        </RightSide>
      </NavbarWrapper>
    </>
  );
};

export { Navbar };
