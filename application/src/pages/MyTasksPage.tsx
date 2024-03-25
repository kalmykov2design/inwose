import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import { Task, TaskProps } from "../components/Task";
import useFetch from "../utils/useFetch";
interface MyTasksPageProps {
  data: TaskProps[];
}

export function MyTasksPage(props: MyTasksPageProps) {
  const { data, loading, error } = useFetch('http://localhost:3000/tasks')
  if (!loading && data) {
    console.log("DATA", data);
    data.map(task => {
      console.log(task);
    })
  }

  return (
    <PageWrapper>
      <div className="container-grid">
        <div className="grid grid-cols-2">
          <div>время</div>
          <div>размер</div>
        </div>
        <div>задачи</div>
      </div>
      {loading && ("loading...")}
      {/* {!loading && data && data.map(task => (
        <Task
          coins={task.coins}
          size={task.size}
          title={task.title}
          type={task.type}
          text={task.text}
          timeLeft={task.timeLeft}
          timePassed={task.timePassed}
          category={task.category}
          key={"task" + task.timeLeft + task.timePassed}
        />

      ))} */}
      {error && (error)}
    </PageWrapper>
  )
};