import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/detail" element={<DetailPage />}></Route>
          <Route path="/about" element={<HomePage />}></Route>
          <Route path="/contact" element={<HomePage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App