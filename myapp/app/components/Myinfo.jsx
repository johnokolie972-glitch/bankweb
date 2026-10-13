import React from 'react'

function Myinfo() {
    const name = "john";
    const age = 29;
    const today = new Date().toDateString();
  return (
    <div>
        <h2>Name: {name}</h2>
        <h4>age: {age}</h4>
        <p>Today's date:{today}</p>
    </div>
  )
}

export default Myinfo