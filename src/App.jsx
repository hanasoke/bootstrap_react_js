import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import ContactPage from './pages/ContactPage'
import AboutUs from './pages/AboutUs'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/detail/:roomName" element={<DetailPage />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App