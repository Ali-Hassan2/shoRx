import styled, { keyframes } from "styled-components";

const LandingWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 220px;

  @media (max-width: 768px) {
    padding-top: 180px;
  }

  @media (max-width: 480px) {
    padding-top: 140px;
  }
`;

const HeadingOne = styled.h1`
  color: white;
  font-size: 3vw;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 5vw;
  }

  @media (max-width: 480px) {
    font-size: 7vw;
  }
`;

const shine = keyframes`
  0% {
    background-position: 0;
  }
  60% {
    background-position: 600px;
  }
  100% {
    background-position: 600px;
  }
`;

const LightHeading = styled.h2`
  font-size: clamp(14px, 4vw, 30px); /* Responsive font size */
  font-weight: 700;
  font-family: "Mulish", sans-serif;
  letter-spacing: 3px;
  text-transform: uppercase;
  cursor: pointer;
  text-align: center; /* Center the text */
  margin: 0 auto; /* Center block element */
  max-width: 90%; /* Keep it within bounds on small screens */

  background: linear-gradient(
    to right,
    hsl(0, 0%, 30%) 0,
    hsl(0, 0%, 100%) 10%,
    hsl(0, 0%, 30%) 20%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shine} 3s infinite linear;
  background-size: 600px;
`;
const Instruction = styled.span`
  color: white;
  font-weight: 800;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  margin-top: 20px;
  display: block;
  text-align: center;
  font-family: "Mulish", sans-serif;
  position: relative;
  top: 20px;
`;

export { LandingWrapper, HeadingOne, LightHeading, Instruction };
