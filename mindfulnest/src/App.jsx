import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import { Prijava } from "./pages/Prijava.jsx"

function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Prijava/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
