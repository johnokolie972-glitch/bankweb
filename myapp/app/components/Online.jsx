import React from 'react'

function Online(isOnline) {
  return (
    <div>
        <h2>{isOnline? "user is Online" : "User is Offline"}</h2> <br />
        </div>
  )
}

export default Online