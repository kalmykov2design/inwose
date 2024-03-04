import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import { Task, TaskProps } from "../components/Task";

interface MyTasksPageProps {
  data: TaskProps[];
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
      {props.data && props.data.map(task => (
        <Task
          coins={task.coins}
          size={task.size}
          title={task.title}
          type={task.type}
          text={task.text}
          timeLeft={task.timeLeft}
          key={"task" + task.timeLeft}
        />

      ))}
    </PageWrapper>
  )
};