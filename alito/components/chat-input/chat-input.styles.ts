import styled from "styled-components";

const InputWrapper = styled.div`
  width: 800px;
  background-color: #191919;
  margin-top: 50px;
  height: 100px;
  border-radius: 20px;
  font-family: "Mulish", sans-serif;
  border: 1px solid #191919;

  /* ✅ Add this soft white shadow */
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.06);

  @media (max-width: 850px) {
    width: 90%;
  }
`;

const First = styled.div`
  width: 100%;
  height: 50%;
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
  padding: 0.5vw;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: none;
  top: 6px;
`;

const BottomIconsWrapper = styled.div`
  width: 100%;
  height: 50%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 20px;
  padding-left: 18px;
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
