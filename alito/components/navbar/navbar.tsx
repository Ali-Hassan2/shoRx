import React from "react";
import {
  NavbarWrapper,
  LeftSide,
  Title,
  Registered,
  RightSide,
  Anchor,
} from "./navbar.style";

interface NavbarProps {
  title: string;
  home: string;
  about: string;
  blogs: string;
  contact: string;
}
const Navbar = ({ title, home, about, blogs, contact }: NavbarProps) => {
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
          <Anchor>{home}</Anchor>
          <Anchor>{about}</Anchor>
          <Anchor>{blogs}</Anchor>
          <Anchor>{contact}</Anchor>
        </RightSide>
      </NavbarWrapper>
    </>
  );
};

export { Navbar };
