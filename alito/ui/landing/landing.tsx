import { useState, useEffect, useRef } from "react";
import {
  LandingWrapper,
  HeadingOne,
  LightHeading,
  Instruction,
} from "./landing.styles";
import { fetchingresponse } from "./actions";
import { ChatInput, ChatBoard } from "@/components";
import { MainLayout } from "@/layout";

type Message = {
  type: "user" | "bot";
  text: string;
};

const Landing = () => {
  const [prompt, setprompt] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const submitit = async () => {
    if (!prompt.trim()) return;

    setMessages((prev) => [...prev, { type: "user", text: prompt }]);
    setprompt("");

    const data = await fetchingresponse(prompt);

    if (data.success) {
      const fullText = String(data.data) || "No response.";

      setMessages((prev) => [...prev, { type: "bot", text: "" }]);

      let index = 0;
      let currentText = "";

      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }

      typingIntervalRef.current = setInterval(() => {
        currentText += fullText.charAt(index);
        index++;

        setMessages((prev) => {
          const newMessages = [...prev];
          const lastIndex = newMessages.length - 1;
          newMessages[lastIndex] = { type: "bot", text: currentText };
          return newMessages;
        });

        if (index >= fullText.length) {
          if (typingIntervalRef.current)
            clearInterval(typingIntervalRef.current);
        }
      }, 30);
    } else {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: `Error: ${data.message}` },
      ]);
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
          onSubmit={submitit}
        />
        {messages.length > 0 && <ChatBoard messages={messages} />}
      </LandingWrapper>
    </MainLayout>
  );
};

export { Landing };
