import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Homepage from './pages/Home/Homepage'
import { Routes, Route } from "react-router-dom";
import ProvisionPage from './pages/Provisions/EBSAProvisionPage'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import SupportedAccommodationPage from './pages/Provisions/SupportedAccomodation'
import AlternativeProvisionPage from './pages/Provisions/AlternativeProvisions'
import BespokeCurriculumPage from './pages/Provisions/BespokeCurriculum'
import AboutPage from './pages/AboutUs/AboutUsPage'
import SafeguardingPage from './pages/Safeguarding/Safeguarding'
import CurriculumPage from './pages/Curriculum/Curriculum'
import PoliciesPage from './pages/Policies/PoliciesPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      
    <Route path="/" element={<Homepage />} />
    <Route path="/provisions/ebsa-support" element={<ProvisionPage/>} />
    <Route path="/provisions/supported-accommodation" element={<SupportedAccommodationPage/>} />
    <Route path="/provisions/alternative-provisions" element={<AlternativeProvisionPage/>} />
    <Route path="/provisions/bespoke-curriculum" element={<BespokeCurriculumPage/>} />
    <Route path="/about-us" element={<AboutPage/>} />
    <Route path="/safeguarding" element={<SafeguardingPage/>} />
    <Route path="/curriculum" element={<CurriculumPage/>} />
    <Route path="/policies" element={<PoliciesPage/>} />
    {/* <Footer/> */}
  </Routes>
  )
}

export default App
