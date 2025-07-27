import styled from "styled-components";

const NavbarWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    padding: 10px 0;
  }
`;

const LeftSide = styled.div`
  width: 50%;
  display: flex;
  justify-content: start;
  padding-left: 250px;
  align-items: center;
  height: 100%;

  @media (max-width: 1024px) {
    padding-left: 100px;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding-left: 0;
    margin-bottom: 10px;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 800;
`;

const Registered = styled.span`
  font-size: 0.9em;
  vertical-align: super;
  color: white;
  font-weight: 900;
`;

const RightSide = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 60px;
  padding-right: 100px;

  @media (max-width: 768px) {
    width: 100%;
    flex-wrap: wrap;
    gap: 20px;
    padding: 10px 0;
  }
`;

const Anchor = styled.div`
  color: white;
  text-decoration: none;
  padding: 0.4vw 1vw;
  padding-bottom: 10px;
  border-radius: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #191919;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 600;

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

export { NavbarWrapper, LeftSide, Title, Registered, RightSide, Anchor };
