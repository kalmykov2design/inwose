import React, { CSSProperties, PropsWithChildren } from "react";

export type ButtonType = "blue" | "transparent" | "gray" | "arbitrary"

interface ButtonProps extends PropsWithChildren {
  action?: () => void;
  type: ButtonType;
  style?: CSSProperties;
}

export function Button(props: ButtonProps) {
  const { type = "transparent", action, children, style } = props
  if (type === "arbitrary") {
    return (
      <button className="flex items-center justify-center min-w-[160px] py-2 rounded-full" style={style} onClick={action}>
        {children}
      </button>
    )
  } else {
    return (
      <button className="flex items-center justify-center min-w-[160px] py-2 rounded-full" style={colorSwitch(type)} onClick={action}>
        {textSwitch(type)}
      </button>
    )
  }
};

function colorSwitch(type: ButtonType): CSSProperties {
  switch (type) {
    case "blue":
      return { backgroundColor: "#0066FF", border: "1px solid #0066FF", color: "white" }
    case "transparent":
      return { backgroundColor: "transparent", border: "1px solid #0066FF", color: "#0066FF" }
    case "gray":
      return { backgroundColor: "#CCCCCC", border: "1px solid #CCCCCC", color: "white" }
    default:
      return {};
  }
}

function textSwitch(type: ButtonType): string {
  switch (type) {
    case "blue":
      return "Принять"

    case "transparent":
      return "Выполнил"

    case "gray":
      return "Отказаться"
      
    default:
      return "";
  }
}