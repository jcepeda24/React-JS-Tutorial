import './App.css'

import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/products'
import Layout from './components/Layout'

function App() {

  return (
    
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home/>} />
            <Route path="/Products" element={<Products/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/About" element={<About/>} />
          </Route>
        </Routes>
      </Router>
    
  );
}

export default App
