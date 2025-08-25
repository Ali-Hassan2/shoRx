import styled from "styled-components";

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  padding: 2rem;

  /* Tablets */
  @media (max-width: 1024px) {
    gap: 1.5rem;
    padding: 1.5rem;
  }

  /* Mobiles */
  @media (max-width: 901px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
  }

  /* Small phones */
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0.75rem;
  }
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  cursor: pointer;

  h2 {
    font-size: clamp(1rem, 2vw, 1.4rem);
    margin-bottom: 0.75rem;
    font-weight: 600;
  }

  p {
    font-size: clamp(0.85rem, 1.5vw, 1rem);
    color: #444;
    line-height: 1.5;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.2);
  }
`;

export { CardWrapper, Card };
