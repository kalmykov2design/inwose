const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Middleware для логирования входящих запросов
app.use((req, res, next) => {
  console.log(`[${new Date().toUTCString()}] ${req.method} ${req.url}`);
  next();
});

// Middleware для логирования исходящих ответов
app.use((req, res, next) => {
  const originalSend = res.send;
  res.send = function(data) {
    console.log(`[${new Date().toUTCString()}] Response sent: ${data}`);
    originalSend.apply(res, arguments);
  };
  next();
});



const tasks = [];

// Создание карточки задачи
app.post('/tasks', (req, res) => {
  const { title, description } = req.body;
  const newTask = { id: tasks.length + 1, title, description };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Получение списка всех карточек задач
app.get('/tasks', (req, res) => {
  console.log('Обработка запроса на получение списка задач');
  res.json(tasks);
});

// Изменение карточки задачи
app.put('/tasks/:id', (req, res) => {
  const taskId = Number(req.params.id);
  const { title, description } = req.body;

  const task = tasks.find(task => task.id === taskId);
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  task.title = title;
  task.description = description;

  res.json(task);
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

