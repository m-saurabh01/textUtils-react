import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('')

  const handleClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
  }
  const handleClick2 = () => {
    let newText = text.toLowerCase()
    setText(newText)
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
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
      <div className="container my-3">
        <div className="mb-3">
          <label htmlFor="exampleForm" className="form-label" />
          {props.title}

          <textarea
            className="form-control"
            id="exampleForm"
            value={text}
            onChange={handleOnChange}
            rows="5"
          />
        </div>

        <button className="btn btn-primary mx-2" onClick={handleClick}>
          toUpperCase
        </button>
        <button className="btn btn-primary" onClick={handleClick2}>
          toLowerCase
        </button>

        <button
          type="submit"
          onClick={speak}
          className="btn btn-warning mx-2 my-2"
        >
          Speak
        </button>

        <button onClick={reset} className="btn btn-primary mx-2">
          Reset speech
        </button>
      </div>

      <div className="container my-3">
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
        <p>{text}</p>
      </div>
    </>
  )
}
