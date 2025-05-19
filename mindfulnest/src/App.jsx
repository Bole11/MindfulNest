import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './App.css'
import { Prijava } from "./pages/Prijava.jsx"
import { Registracija } from "./pages/Registracija.jsx"
import { ZaboravljenaLozinka } from "./pages/ZaboravljenaLozinka.jsx"
import { ProfilEksperta } from "./pages/ProfilEksperta.jsx"

function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Prijava/>} />
          <Route path="/registracija" element={<Registracija/>}/>
          <Route path="/zaboravljenalozinka" element={<ZaboravljenaLozinka/>}/>
          <Route path="/profileksperta" element={<ProfilEksperta/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
