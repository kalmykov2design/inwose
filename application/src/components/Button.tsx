import React, { CSSProperties, PropsWithChildren } from "react";

export type ButtonType = "blue" | "transparent" | "gray" | "arbitrary" | "close" | "linkLike" | "submit"

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
  } else if (type === "close") {
    return (
      <button className="flex items-center justify-center p-2 rounded-full" style={colorSwitch(type)} onClick={action}>
        <svg height={14} width={14} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path fill="black" d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
        </svg>
      </button>
    )
  } else if (type === "linkLike") {
    return (
      <button className="text-sm text-blue-600" style={style} onClick={action}>
        {children}
      </button>
    )
  }  else if (type === "submit") {
    return (
      <button className="flex items-center justify-center py-2 px-4 rounded-full bg-blue-600 text-white" style={style} onClick={action} type="submit">
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