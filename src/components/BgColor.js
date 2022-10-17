import React, { useState } from 'react'
import { GithubPicker } from 'react-color'

export default function BgColor(props) {
  const [color, setColor] = useState('#FFFFFF')

  return (
    <div>
      <GithubPicker
        color={color}
        onChangeComplete={(color) => {
          setColor(color.hex)
          props.toggleBg(color.hex)
        }}
      />
    </div>
  )
}
