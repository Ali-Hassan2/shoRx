import styled from "styled-components";

const CardWrapper = styled.div`
  border: 3px solid red;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 100px;
  width: 100vw;
  max-width: 1800px;
  padding: 20px;
`;

const Card = styled.div`
  background: #ffffffcc;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  padding: 20px;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  h2 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 0.9rem;
    color: #333;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.25);
  }
`;

export { CardWrapper, Card };
