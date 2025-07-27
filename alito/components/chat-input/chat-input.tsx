import React from "react";
import { FiSend, FiSettings, FiSmile, FiMessageCircle } from "react-icons/fi";
import {
  InputWrapper,
  Input,
  SendIconWrapper,
  BottomIconsWrapper,
  Icon,
  ToolsText,
  First,
} from "./chat-input.styles";
interface ChatProps {
  placeholder: string;
  prompt: string;
  setprompt: (value: string) => void;
  onSubmit: (value: string) => void;
  onSecondIconClick: () => void;
}

const ChatInput = ({
  placeholder,
  prompt,
  setprompt,
  onSubmit,
  onSecondIconClick,
}: ChatProps) => {
  return (
    <InputWrapper>
      <First>
        <Input
          placeholder={placeholder}
          value={prompt}
          onChange={(e) => setprompt(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSubmit(prompt);
            }
          }}
        />
        <SendIconWrapper onClick={() => onSubmit(prompt)}>
          <FiSend size={20} />
        </SendIconWrapper>
      </First>
      <BottomIconsWrapper>
        <Icon>
          <FiSettings size={20} />
        </Icon>
        <Icon onClick={onSecondIconClick}>
          {" "}
          <FiMessageCircle size={20} />
        </Icon>
        <Icon>
          <FiSmile size={20} />
        </Icon>
        <ToolsText>Write Tools</ToolsText>
      </BottomIconsWrapper>
    </InputWrapper>
  );
};

export { ChatInput };
