import React from "react";

interface InputProps {
  placeholder?: string;
  defaultValue?: string;
  textarea?: boolean;
  label?: string;
  name: string;
  wide?: boolean;
}

export function Input(props: InputProps) {
  return (
    <div>
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      {props.textarea
        ? <textarea
          className="p-4 bg-gray-200 rounded-lg placeholder:text-sm placeholder:text-gray-500 mt-2"
          style={props.wide ? { width: "100%" } : { minWidth: "160px" }}
          name={props.name}
          id={props.name + "id"}
          placeholder={props.placeholder}>
          {props.defaultValue}
        </textarea>
        : <input
          className="p-4 bg-gray-200 rounded-lg placeholder:text-sm placeholder:text-gray-500 mt-2"
          style={props.wide ? { width: "100%" } : { minWidth: "160px" }}
          type="text"
          name={props.name}
          id={props.name + "id"}
          placeholder={props.placeholder}
          defaultValue={props.defaultValue} />
      }
    </div>
  )
};