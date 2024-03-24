export interface CreateTaskProps {
  categoryName: string;
  deadline: string;
  sizeName: string;
  taskDescr: string;
  taskName: string;
  timeForTask: string;
}

export const createTask = async (body: CreateTaskProps) => {
  console.log(body);
  
  const response = await fetch("http://localhost:3000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  console.log(data);
};

export const getAllTasks = async () => {
  const response = await fetch("http://localhost:3000/tasks");
  const data = await response.json();
  console.log(data);
};

export const updateTask = async (taskId, title, description) => {
  const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, description }),
  });

  const data = await response.json();
  console.log(data);
};
