import React, { useState } from "react";

export interface RadioOption {
  label: string;
  id: string;
  checked?: boolean;
  name: string;
}

export interface RadioProps {
  options: RadioOption[];
}

export function Radio(props: RadioProps) {
  const [selectedOption, setSelectedOption] = useState('');

  function handleOptionChange(id: string) {
    setSelectedOption(id);
  }

  return (
    <>
      {props.options.map((option) => (
        <div key={option.id} className="flex items-center gap-2">
          <input
            type="radio"
            className="w-0 h-0 opacity-0 -mr-2"
            checked={selectedOption === option.id}
            onChange={() => handleOptionChange(option.id)}
            name={option.name}
            id={option.id}
          />
          <div className="mt-2 h-6 w-6 bg-gray-200 rounded-md flex justify-center items-center">
            {selectedOption === option.id && (
              <svg width="14" height="14" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.7759 0C22.0396 2.57954e-05 14.2657 16.9002 8.24817 17C4.09393 17 -2.13324 10.3949 0.726251 9.54403C2.7321 8.9472 4.09395 12.4267 8.24819 12.4267C12.4024 12.4267 15.7701 -1.21354e-05 17.7759 0Z" fill="#4BDD6B" />
              </svg>
            )}
          </div>
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
    </>
  );
}


// interface RadioProps {
//   checked?: boolean;
//   name: string;
//   label: string;
//   id: string;
// }
// <div className="h-6 w-6 bg-gray-200 rounded-md flex justify-center items-center">
//         {isChecked && (
//           <svg width="14" height="14" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M17.7759 0C22.0396 2.57954e-05 14.2657 16.9002 8.24817 17C4.09393 17 -2.13324 10.3949 0.726251 9.54403C2.7321 8.9472 4.09395 12.4267 8.24819 12.4267C12.4024 12.4267 15.7701 -1.21354e-05 17.7759 0Z" fill="#4BDD6B" />
//           </svg>
//         )}
//       </div>