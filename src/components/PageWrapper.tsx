import React, { PropsWithChildren } from "react";

interface PageWrapperProps extends PropsWithChildren {
  
}

export function PageWrapper (props: PageWrapperProps) {
  return (
    <div className="container mx-[auto] mt-5 mb-20 px-5">
      {props.children}
    </div>
  )
};