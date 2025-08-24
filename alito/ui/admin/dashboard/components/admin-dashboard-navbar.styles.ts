import styled from "styled-components";

interface HeadingFProps {
  active?: boolean;
  color?: string;
}

const NavbarWrapper = styled.div`
  width: 100vw;
  height: 50px;
  border: 3px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Left = styled.div`
  width: 50%;
  height: 100%;
  border: 1px solid blue;
  font-size: 2vw;
  font-weight: 700;
`;
const Right = styled.div`
  width: 50%;
  height: 100%;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;
const HeadingF = styled.div<HeadingFProps>`
  cursor: pointer;
  font-weight: ${({ active }) => (active ? "700" : "400")};
  color: ${({ color, active }) =>
    active ? color || "yellow" : color || "white"};
  border-bottom: ${({ active }) => (active ? "2px solid white" : "none")};
`;

export { NavbarWrapper, Left, Right, HeadingF };
