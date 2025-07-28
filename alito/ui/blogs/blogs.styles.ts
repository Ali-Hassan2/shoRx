import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
`;

export const BlogCardWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin-bottom: 2rem;
`;

export const HeadingWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export const HeadingOne = styled.h1`
  font-family: "Mulish", sans-serif;
  font-weight: 800;
  font-size: 2.5rem;
  background: linear-gradient(90deg, #fff, #ddd);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 1.5px;
  user-select: none;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CardWrapper = styled.div`
  width: 80%;
  height: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SidebarWrapper = styled.div`
  width: 20%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
