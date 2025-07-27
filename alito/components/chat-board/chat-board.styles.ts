import styled from "styled-components";

export const BoardWrapper = styled.div`
  width: 800px;
  max-width: 800px;
  margin-top: 70px;
  background-color: #191919;
  border-radius: 12px;
  padding-bottom: 24px;
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.05);
  color: #fff;
  font-family: "Mulish", sans-serif;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #333;
  padding: 7px 10px;
  border-radius: 12px;
`;

export const DotGroup = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

export const Dot = styled.div<{ color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

export const Title = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: #f2f2f2;
  margin: 0 0 0 10px;
`;

export const CopyButton = styled.button`
  color: #f2f2f2;
  padding: 6px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  font-family: Mulish;
  font-size: 10px;
  transition: all 0.2s ease-in-out;
  border: none;
  &:hover {
    background-color: #2e2e2e;
    border-color: #666;
    transform: translateY(-1px);
  }
`;
