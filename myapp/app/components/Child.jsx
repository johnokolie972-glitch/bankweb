import React from 'react'

const child = ({sendMessage}) => {
  return (
    <div>
        <button onClick={() => sendMessage("Hello parent")}>click me</button>
    </div>
  )
}

export default child