import styled from "styled-components";

const InputWrapper = styled.div`
  width: 800px;
  background-color: #191919;
  margin-top: 50px;
  height: 100px;
  border-radius: 20px;
  font-family: "Mulish", sans-serif;
  border: 1px solid #191919;

  /* Subtle white glow */
  box-shadow: 0 2px 8px rgba(255, 255, 255, 0.15);

  @media (max-width: 850px) {
    width: 90%;
  }
`;

const First = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  padding-right: 10px;
`;

const Input = styled.input`
  width: 90%;
  height: 100%;
  background-color: transparent;
  padding-left: 20px;
  font-family: "Mulish", sans-serif;
  font-size: 15px;
  border: none;
  outline: none;
  padding-top: 10px;
`;

const SendIconWrapper = styled.div`
  position: relative;
  padding: 0.5vw; /* scales with viewport width */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: black;
  top: 6px;
  width: max-content; /* shrink to content width */
  height: max-content; /* shrink to content height */

  @media (max-width: 768px) {
    padding: 1vw; /* slightly bigger padding on smaller screens */
    border-width: 2px;
    top: 4px;
  }

  @media (max-width: 480px) {
    padding: 1.5vw; /* more padding on very small screens */
    border-width: 1.5px;
    top: 3px;
  }
`;

const BottomIconsWrapper = styled.div`
  width: 801px;
  position: relative;
  left: -1px;
  height: 40%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 20px;
  padding-left: 18px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  padding-top: 10px;
  padding-bottom: 7px;
`;

const Icon = styled.div`
  cursor: pointer;
  color: white;
  transition: color 0.3s ease;

  &:hover {
    color: red;
  }
`;

const ToolsText = styled.span`
  color: white;
  font-weight: 700;
  font-size: 16px;
  cursor: default;
`;

export {
  InputWrapper,
  Input,
  SendIconWrapper,
  BottomIconsWrapper,
  Icon,
  ToolsText,
  First,
};
