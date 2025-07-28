import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 100%;
  max-width: 300px;
  padding: 1rem;
  font-family: "Mulish", sans-serif;
  color: #eee;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const CategoryBox = styled.div`
  position: relative;
  background-color: #191919;
  margin-bottom: 0.6rem;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  z-index: 0;

  &:hover > div {
    opacity: 1;
  }
`;

export const BackgroundHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.12),
    transparent 80%
  );
  filter: blur(30px);
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: -1;
  border-radius: 20px;
  opacity: 0;
`;

export const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 1rem;
  font-weight: 700;
  font-size: 0.95rem;
  user-select: none;
  color: #ccc;
  transition: all 0.3s ease;
  background-color: #191919;

  &:hover {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.05);
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const CategoryTitle = styled.div`
  background-color: transparent;
`;

export const ArrowIcon = styled.span<{ isOpen: boolean }>`
  display: inline-block;
  transition: transform 0.3s ease;
  transform: rotate(${(props) => (props.isOpen ? "180deg" : "0deg")});
  background-color: transparent;
`;

export const BlogList = styled.div`
  margin-top: 0.5rem;
  padding-left: 1rem;
  background-color: transparent;
`;

export const BlogTitle = styled.div`
  padding: 0.25rem 0;
  cursor: pointer;
  color: #ccc;
  font-size: 0.9rem;
  transition: color 0.2s;
  background-color: transparent;
  &:hover,
  &:focus {
    color: #fff;
    outline: none;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;
