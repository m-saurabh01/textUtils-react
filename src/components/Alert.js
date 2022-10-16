import React from 'react'

function Alert(props) {
  const capitalize = (word) => {
    const msg1 = word.toLowerCase()

    return msg1.charAt(0).toUpperCase() + msg1.slice(1)
  }
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)} </strong>
        {props.alert.msg}
      </div>
    )
  )
}

export default Alert
