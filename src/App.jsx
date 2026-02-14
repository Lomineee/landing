import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skill from './components/Skills'  
import Blog from './components/Blog'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <div className="pt-10">
        <Home />
        <About />
        <Skill />
        <Blog />
        <Footer />
      </div>
      
    </>
  )
}

export default App
