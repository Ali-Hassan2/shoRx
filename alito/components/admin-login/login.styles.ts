import styled from "styled-components";

const LoginContainer = styled.div`
  width: 360px;
  height: 330px;
  padding: 1vw;
  background-color: #171717;
  border-radius: 12px;
  border: 1px solid rgba(252, 252, 252, 0.26);
`;

const Header = styled.div`
  width: 100%;
  padding-bottom: 1vw;
  background-color: transparent;
`;

const HeadingOne = styled.h4`
  font-size: 14px;
  background-color: transparent;
`;
const HeadingTwo = styled.h4`
  margin-top: 5px;
  font-size: 13px;
  color: rgba(252, 252, 252, 0.47);
  font-weight: 500;
  background-color: transparent;
`;
const Content = styled.div`
  font-size: 14px;
  background-color: transparent;
  margin-top: 10px;
`;
const Label = styled.h4`
  margin-left: 3px;
  background-color: transparent;
  font-size: 13px;
  color: rgba(252, 252, 252, 0.88);
`;
const Input = styled.input`
  width: 100%;
  height: 35px;

  border-radius: 8px;
  margin-top: 7px;
  background-color: #212121;
  border: 1px solid rgba(252, 252, 252, 0.17);
  outline: none;
  padding-left: 10px;
  font-family: Mulish;
`;

const Button = styled.button`
  width: 100%;
  height: 35px;

  border-radius: 8px;
  margin-top: 30px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(252, 252, 252, 0.17);
  outline: none;
  padding-left: 10px;
  font-family: Mulish;
`;

const Checker = styled.div`
  background-color: transparent;
  margin-top: 20px;
  text-align: center;
  font-size: 12px;
  color: rgba(252, 252, 252, 0.75);
  font-family: Mulish;
`;

const Anchor = styled.span`
  background-color: transparent;
  text-decoration: underline;
  cursor: pointer;
  color: white;
`;

export {
  LoginContainer,
  Header,
  HeadingOne,
  HeadingTwo,
  Content,
  Label,
  Input,
  Button,
  Checker,
  Anchor,
};
