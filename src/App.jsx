import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Donate from './pages/Donate'
import Pricing from './pages/Pricing'
import Blogroll from './pages/Blogroll'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blogroll" element={<Blogroll />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
