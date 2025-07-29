import styled from "styled-components";

export const CardWrapper = styled.div`
  padding: 2rem;
  max-width: 100%;
  width: 1800px;
  background-color: #1c1c1c;
  color: white;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(0.98);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
  background-color: transparent;
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: bold;
  background-color: transparent;
`;

export const CardMeta = styled.div`
  font-size: 0.85rem;
  color: #aaa;
  margin-bottom: 10px;
  background-color: transparent;
`;

export const CardContent = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #ccc;
  background-color: transparent;
`;

export const ReadMoreButton = styled.button`
  font-family: "Mulish", sans-serif;
  background-color: #fff;
  color: #000;
  padding: 6px 14px;
  font-weight: 600;
  font-size: 0.9rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  align-self: flex-start;
  margin-top: 40px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const LikesPublishWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 12px;
  color: #ccc;
  font-size: 0.9rem;
  align-items: center;
  background-color: transparent;
`;

export const LikesText = styled.div`
  display: flex;
  align-items: center;
  color: #ff6b6b;
  background-color: transparent;
`;

export const PublishDateText = styled.div`
  color: #999;
  background-color: transparent;
`;
