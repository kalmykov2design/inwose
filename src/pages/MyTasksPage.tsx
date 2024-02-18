import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import { Task } from "../components/Task";

interface MyTasksPageProps {

}

export function MyTasksPage(props: MyTasksPageProps) {
  return (
    <PageWrapper>
      <div className="container-grid">
        <div className="">
          <div className="">осталось</div>
          <div className="">размер</div>
        </div>
        <div className="">задачи</div>
      </div>
      <Task />
      <Task />
      <Task />
    </PageWrapper>
  )
};