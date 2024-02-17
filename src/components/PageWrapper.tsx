import React, { PropsWithChildren } from "react";
import { Header } from "./Header";
import { WeekCalendar } from "./WeekCalendar";

interface PageWrapperProps extends PropsWithChildren {

}

export function PageWrapper(props: PageWrapperProps) {
  return (
    <>
      <WeekCalendar />
      <Header />
      <div className="container mx-[auto] mt-5 mb-20 px-5">
        {props.children}
      </div>
    </>
  )
};