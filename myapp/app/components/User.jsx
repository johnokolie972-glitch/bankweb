import React from 'react'

function user() {
    const name = "john";
    const birthyear = 1997;
    const currentyear = new Date ().getFullYear();
  return (
    <div>
        <h1>Name : {name}</h1>
        <p>Age: {currentyear - birthyear} </p>
    </div>
  )
}

export default user