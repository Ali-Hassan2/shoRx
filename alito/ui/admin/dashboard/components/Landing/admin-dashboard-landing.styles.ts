import styled, { keyframes } from "styled-components";

const LandingWrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;

  @media (max-width: 768px) {
    height: auto;
    min-height: 70vh;
  }
`;

const shine = keyframes`
  0% {
    background-position: 0;
  }
  100% {
    background-position: 600px;
  }
`;

const HeadingMain = styled.div`
  font-size: clamp(18px, 6vw, 40px);
  font-family: Mulish, sans-serif;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;

  background: linear-gradient(
    to right,
    hsl(0, 0%, 30%) 0,
    hsl(0, 0%, 100%) 10%,
    hsl(0, 0%, 30%) 20%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: ${shine} 2s linear infinite;
  background-size: 600px;

  transition: all 0.3s ease-in-out;
  &:hover {
    color: white;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: clamp(16px, 8vw, 28px);
    letter-spacing: 1px;
    text-align: center;
  }
`;

const Buttons = styled.div`
  margin-top: 40px;
`;

const BlogButton = styled.div`
  padding: 16px 50px;
  background-color: white;
  color: black;
  border: none;
  outline: none;
  cursor: pointer;
`;

export { LandingWrapper, HeadingMain, Buttons, BlogButton };
