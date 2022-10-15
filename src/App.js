import './App.css'
import About from './components/About'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App() {
  return (
    <>
      <Navbar title="TestUtils" />
      <TextForm title="Your Notes" />
      <About title="About Us" />
    </>
  )
}

export default App
