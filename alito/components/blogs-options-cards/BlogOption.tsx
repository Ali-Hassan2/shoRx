import React from "react";

interface options {
  label?: string;
  description?: string;
}

interface BlogOptionsProps {
  options: options[];
}
const BlogOption = ({ options = [] }: BlogOptionsProps): void => {
  return (
    <>
      <div>
        {options.map((op, index) => {
          return (
            <div key={index}>
              <h2>{op.label}</h2>
              <p>{op.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export { BlogOption };
