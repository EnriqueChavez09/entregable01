import React from "react";

export const TextComponent = ({ text, style }) => {
  const { color } = style;
  return (
    <div className="textComponent">
      <p style={{ color: color }}>{text}</p>
    </div>
  );
};
