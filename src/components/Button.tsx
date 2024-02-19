import React, { CSSProperties, PropsWithChildren } from "react";

export type ButtonType = "blue" | "transparent" | "gray"

interface ButtonProps extends PropsWithChildren {
  action?: () => void;
  type: ButtonType
}

export function Button(props: ButtonProps) {
  const { type = "transparent", action, children } = props
  return (
    <button className="flex items-center justify-center min-w-[160px] py-3 rounded-full" style={colorSwitch(type)} onClick={action}>
      {children}
    </button>
  )
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