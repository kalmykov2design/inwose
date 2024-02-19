import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MyTasksPage } from "./pages/MyTasksPage";
import { LoginPage } from "./pages/LoginPage";
import { PariPage } from "./pages/PariPage";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/mytasks" element={<MyTasksPage data={mock} />} />
      <Route path="/pari" element={<PariPage />} />
      <Route path="/team" element={<MyTasksPage />} />
    </Routes>
  );
}

const mock = [
  {
    coins: {
      coinsAmount: 3,
      hasBg: false,
      hasPlus: true,
      coinColor: "green"
    },
    size: "small",
    title: "Подизайнить",
    type: "team",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam recusandae quasi architecto dolore dolorum culpa, sed veritatis harum quos aspernatur corporis ratione eaque ipsa nihil hic enim repellendus rem maxime.",
    timeLeft: 48385
  },
  {
    coins: {
      coinsAmount: 14,
      hasBg: false,
      hasPlus: true,
      coinColor: "green"
    },
    size: "large",
    title: "Пососать жопу",
    type: "pari",
    text: "Нужно сделать дизайн главной страницы и страницы пари",
    timeLeft: 9331553
  },
  {
    coins: {
      coinsAmount: 6,
      hasBg: false,
      hasPlus: true,
      coinsNotEarnedAmount: 12,
      coinColor: "red"
    },
    size: "medium",
    title: "Заполнить заявку на дизайн выходные",
    type: "personal",
    text: "https://designweekend.ru",
    timeLeft: 38
  },
]