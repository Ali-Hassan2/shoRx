import { useState } from "react";
import {
  LandingWrapper,
  HeadingOne,
  LightHeading,
  Instruction,
} from "./landing.styles";
import { ChatInput, ChatBoard } from "@/components";
import { MainLayout } from "@/layout";

const Landing = () => {
  const [prompt, setprompt] = useState<string>("");
  const [showboard, setshowboard] = useState<boolean>(false);
  const handleToggleBoard = () => {
    if (prompt.trim() !== "") {
      setshowboard(true);
    } else {
      setshowboard(false);
    }
  };

  return (
    <MainLayout>
      <LandingWrapper>
        <HeadingOne>Hi, I'm Shoaib.</HeadingOne>
        <LightHeading>
          Your go-to expert for safe medicine, and honest advice.
        </LightHeading>
        <Instruction>Talk to my Personal Assistant</Instruction>
        <ChatInput
          placeholder="Ask anything..."
          prompt={prompt}
          setprompt={setprompt}
          onSubmit={handleToggleBoard}
          onSecondIconClick={handleToggleBoard}
        />
        {showboard && <ChatBoard />}
      </LandingWrapper>
    </MainLayout>
  );
};

export { Landing };
