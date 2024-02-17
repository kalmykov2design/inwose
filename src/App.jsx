import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MyTasksPage } from "./pages/MyTasksPage";
import { LoginPage } from "./pages/LoginPage";
import { PariPage } from "./pages/PariPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/mytasks" element={<MyTasksPage />} />
      <Route path="/pari" element={<PariPage />} />
      <Route path="/team" element={<MyTasksPage />} />
    </Routes>
  );
}

export default App;
