import styled from "styled-components";

const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
`;

const HeadingOne = styled.h2`
  font-family: "Mulish", sans-serif;
  font-weight: 700;
  font-size: 2.4rem;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  span.shoRx {
    font-size: 1.5rem;
  }
  span.registered {
    display: inline-block;
    font-size: 0.7rem;
    font-weight: 700;
    background-color: white;
    color: black;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    user-select: none;
    margin-left: 0px;
  }
`;

export { PageWrapper, HeadingOne };
