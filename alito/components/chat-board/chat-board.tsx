import React from "react";
import {
  BoardWrapper,
  Header,
  Title,
  CopyButton,
  DotGroup,
  Dot,
} from "./chat-board.styles";

const ChatBoard = () => {
  return (
    <BoardWrapper>
      <Header>
        <div style={{ display: "flex", alignItems: "center" }}>
          <DotGroup>
            <Dot color="#ff5f56" />
            <Dot color="#ffbd2e" />
            <Dot color="#27c93f" />
          </DotGroup>
          <Title>Response</Title>
        </div>
        <CopyButton>Copy</CopyButton>
      </Header>
    </BoardWrapper>
  );
};

export { ChatBoard };
