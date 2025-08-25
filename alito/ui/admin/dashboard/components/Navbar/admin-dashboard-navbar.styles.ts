import styled from "styled-components";

interface HeadingFProps {
  active?: boolean;
  color?: string;
}

const NavbarWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    gap: 10px;
    padding: 1rem;
  }
`;

const Left = styled.div`
  flex: 1;
  font-size: clamp(16px, 2vw, 22px);
  font-weight: 700;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(20px, 8vw, 100px);

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 20px;
  }
`;

const HeadingF = styled.div<HeadingFProps>`
  cursor: pointer;
  font-weight: ${({ active }) => (active ? "700" : "400")};
  color: ${({ color, active }) =>
    active ? color || "yellow" : color || "white"};
  border-bottom: ${({ active }) => (active ? "2px solid white" : "none")};
  font-size: clamp(14px, 2vw, 18px);
`;

export { NavbarWrapper, Left, Right, HeadingF };
