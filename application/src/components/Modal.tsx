import React, { PropsWithChildren } from "react";
import { Button } from "./Button";

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  handleClose?: () => void
}

export function Modal(props: ModalProps) {
  return (
    <>
      {props.isOpen &&
        <div className="fixed top-0 left-0 bottom-0 right-0 w-[100vw] h-[100vh]">
          <div className="fixed top-0 left-0 bottom-0 right-0 w-full h-full bg-black blur-sm opacity-25"></div>
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <div className="min-w-[600px] min-h-[300px] p-8 bg-white rounded-lg">
              <div className="w-full flex justify-end"><Button type='close' action={props.handleClose} /></div>
              <div className="flex flex-col">
                {props.children}
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};