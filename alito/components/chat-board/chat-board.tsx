import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import {
  BoardWrapper,
  Header,
  DotGroup,
  Dot,
  Title,
  CopyButton,
} from "./chat-board.styles";

type Message = {
  type: "user" | "bot";
  text: string;
};

interface ChatBoardProps {
  messages: Message[];
}
const MessagesContainer = styled.div`
  padding: 1rem;
  max-height: 400px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;

  -ms-overflow-style: none;

  @media (max-width: 900px) {
    max-height: 350px;
  }

  @media (max-width: 480px) {
    max-height: 60vh;
    padding: 0.75rem;
  }
`;

const ResponsiveBoardWrapper = styled(BoardWrapper)`
  width: 100%;
  max-width: 800px;
  margin-top: 70px;

  @media (max-width: 900px) {
    max-width: 90vw;
    margin-top: 40px;
  }

  @media (max-width: 480px) {
    max-width: 90vw;
    margin-top: 40px;
    border-radius: 20px; /* optional: no border radius on small screens */
    padding-bottom: 16px;
  }
`;

const ResponsiveHeader = styled(Header)`
  padding: 7px 10px;

  @media (max-width: 480px) {
    padding: 7px 8px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
`;

const ChatBoard: React.FC<ChatBoardProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <ResponsiveBoardWrapper>
      <ResponsiveHeader>
        <div style={{ display: "flex", alignItems: "center" }}>
          <DotGroup>
            <Dot color="#ff5f56" />
            <Dot color="#ffbd2e" />
            <Dot color="#27c93f" />
          </DotGroup>
          <Title>Conversation</Title>
        </div>
        <CopyButton
          onClick={() => {
            const text = messages
              .map((m) => `${m.type === "user" ? "User" : "Bot"}: ${m.text}`)
              .join("\n");
            navigator.clipboard.writeText(text);
          }}
        >
          Copy
        </CopyButton>
      </ResponsiveHeader>

      <MessagesContainer>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              marginBottom: "1rem",
              textAlign: msg.type === "user" ? "right" : "left",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "8px 12px",
                borderRadius: "15px",
                backgroundColor:
                  msg.type === "user" ? "#191919" : "transparent",
                color: "#fff",
                maxWidth: "70%",
                wordBreak: "break-word",
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {/* Dummy div to scroll into view */}
        <div ref={messagesEndRef} />
      </MessagesContainer>
    </ResponsiveBoardWrapper>
  );
};

export { ChatBoard };
