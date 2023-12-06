import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { MyTasksPage } from './pages/MyTasksPage'
import { LoginPage } from './pages/LoginPage'
import { PariPage } from './pages/PariPage'
import { WeekCalendar } from './components/WeekCalendar'

function App() {
  return (
    <>
    <Header/>
    <WeekCalendar />
    <main>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/mytasks' element={<MyTasksPage />} />
        <Route path='/pari' element={<PariPage />} />
        <Route path='/team' element={<MyTasksPage />} />
      </Routes>
    </main>
    </>
  )
}

export default App
