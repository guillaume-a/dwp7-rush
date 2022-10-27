import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../Components/Layout'
import About from '../Pages/About'
import Home from '../Pages/Home'
import NotFound from '../Pages/NotFound'
import Place from '../Pages/Place'

const MainController = () => {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/errors/404" element={<NotFound />} />
              <Route path="/place/:id" element={<Place />} />
            </Routes>
        </Layout>
    </BrowserRouter>
  )
}

export default MainController