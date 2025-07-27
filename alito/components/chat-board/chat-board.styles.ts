import styled from "styled-components";

const BoardWrapper = styled.div`
  width: 800px;
  max-width: 90%;
  margin-top: 70px;
  background-color: #000;
  border-radius: 12px;
  padding-bottom: 24px;
  color: #fff;
  font-family: "Mulish", sans-serif;

  /* Soft white shadow */
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.06);

  @media (max-width: 850px) {
    width: 90%;
    margin-top: 40px;
    border-radius: 16px; /* optional */
    padding-bottom: 16px;
  }

  @media (max-width: 480px) {
    width: 90%;
    margin-top: 20px;
    border-radius: 20px;
    padding-bottom: 12px;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #333;
  padding: 7px 10px;
  box-shadow: 1px -1px 3px white;
  border: none;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;

  @media (max-width: 480px) {
    padding: 7px 8px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
`;

const DotGroup = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

const Dot = styled.div<{ color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

const Title = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: #f2f2f2;
  margin: 0 0 0 10px;
`;

const CopyButton = styled.button`
  color: #f2f2f2;
  padding: 6px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  font-family: Mulish, sans-serif;
  font-size: 10px;
  transition: all 0.2s ease-in-out;
  border: none;

  &:hover {
    background-color: #2e2e2e;
    border-color: #666;
    transform: translateY(-1px);
  }
`;

export { BoardWrapper, Header, DotGroup, Dot, Title, CopyButton };
