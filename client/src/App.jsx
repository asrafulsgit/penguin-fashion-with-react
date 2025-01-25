import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing_Page from './components/Landing_Page'
import Product from './pages/Product'
import About_us from './pages/About_us'
import Contact_us from './pages/Contact_us'


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing_Page />} />
        <Route path='/product' element={<Product />} />
        <Route path='/about-us' element={<About_us />} />
        <Route path='/contact-us' element={<Contact_us />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
