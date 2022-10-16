import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('')

  const handleClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert('Text converted to upper case', 'success')
  }
  const handleClick2 = () => {
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert('Text converted to lower case', 'success')
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const handleReset = () => {
    setText('')
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance()
    msg.text = text
    window.speechSynthesis.speak(msg)
  }

  const reset = () => {
    window.speechSynthesis.cancel()
  }

  return (
    <>
      <div
        className="container my-3"
        style={{
          color: props.mode === 'light' ? 'black' : 'white',
        }}
      >
        <div className="mb-3">
          <label htmlFor="exampleForm" className="form-label" />
          {props.title}

          <textarea
            className="form-control"
            id="exampleForm"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor:
                props.mode === 'dark' ? 'darkslategrey' : 'white',
              color: props.mode === 'light' ? 'black' : 'white',
            }}
            rows="5"
          />
        </div>

        <button className="btn btn-primary mx-2" onClick={handleClick}>
          UpperCase
        </button>
        <button className="btn btn-primary" onClick={handleClick2}>
          LowerCase
        </button>

        <button
          type="submit"
          onClick={speak}
          className="btn btn-warning mx-2 my-2"
        >
          Play
        </button>

        <button onClick={reset} className="btn btn-primary">
          Stop
        </button>

        <button onClick={handleReset} className="btn btn-primary mx-2">
          Clear Text
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === 'light' ? 'black' : 'white',
        }}
      >
        <h1>Your text's summary</h1>
        <p>
          Tour text has {text.length} characters and {text.split(' ').length}{' '}
          words
        </p>

        <p>
          This document can be readed in {0.008 * text.split(' ').length}{' '}
          minutes
        </p>

        <h3>Preview</h3>
        <p>
          {text.length === 0 ? 'Preview of your notes will appear here' : text}
        </p>
      </div>
    </>
  )
}
