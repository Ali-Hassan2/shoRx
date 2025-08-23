import styled from "styled-components";

const NavbarWrapper = styled.div`
  width: 100vw;
  height: 50px;
  border: 3px solid red;
  display: flex;
  
`;
const Left = styled.div`
  width: 50%;
  height: 100%;
  border: 1px solid blue;
`;
const Right = styled.div`
  width: 50%;
  height: 100%;
  border: 2px solid white;
`;

export { NavbarWrapper, Left, Right };
