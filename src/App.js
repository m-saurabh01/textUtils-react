import { useState } from 'react'
import './App.css'
import About from './components/About'
import Alert from './components/Alert'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App() {
  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Darkmode enabled', 'success')
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Darkmode disabled', 'warning')
    }
  }
  return (
    <>
      <Navbar title="TestUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} title="Your Notes" mode={mode} />
      <About title="About Us" mode={mode} />
    </>
  )
}

export default App
