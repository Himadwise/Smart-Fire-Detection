import React from 'react'
import "./style.css"
import Navbar from "./Navbar"
import Home from './Home'
import About from './About'
import Content from './Content'
import Contact from './Contact'
import Footer from './Footer'
const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Content />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
