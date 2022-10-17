import { useState } from 'react'
import './App.css'
import About from './components/About'
import Alert from './components/Alert'
import BgColor from './components/BgColor'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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
      document.body.style.backgroundColor = '#C4DEF6'
      showAlert('Darkmode disabled', 'warning')
    }
  }

  const toggleBg = (color) => {
    document.body.style.backgroundColor = `${color}`
  }
  return (
    <>
      <div>
        <Router>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <TextForm
                    showAlert={showAlert}
                    title="Your Notes"
                    mode={mode}
                  />
                  <div
                    className="container"
                    style={{
                      color: mode === 'light' ? 'black' : 'white',
                    }}
                  >
                    <h3>Beta Background-Color Scheme</h3>
                    <BgColor toggleBg={toggleBg} />
                  </div>
                </>
              }
            ></Route>

            <Route
              path="/about"
              element={<About title="About Us" mode={mode} />}
            ></Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
