import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './App.css'
import { Prijava } from "./pages/Prijava.jsx"
import { Registracija } from "./pages/Registracija.jsx"

function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Prijava/>} />
          <Route path="/registracija" element={<Registracija/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
