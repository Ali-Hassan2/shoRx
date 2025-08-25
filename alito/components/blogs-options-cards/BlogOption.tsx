import React from "react";
import { Card, CardWrapper } from "./BlogOption.styles";
interface Option {
  label?: string;
  description?: string;
}

interface BlogOptionsProps {
  options: Option[];
}

const BlogOption = ({ options = [] }: BlogOptionsProps) => {
  return (
    <CardWrapper>
      {options.map((op, index) => (
        <Card key={index}>
          <h2>{op.label}</h2>
          <p>{op.description}</p>
        </Card>
      ))}
    </CardWrapper>
  );
};

export { BlogOption };
