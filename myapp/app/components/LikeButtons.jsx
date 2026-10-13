import React, { useState } from 'react'

function Likebutton() {
    const [liked, setLiked]= useState(false);

  return (
    <button onClick={()=> setLiked(prev=> !prev)}>
        {liked? "Liked" :"Like"}
    </button>
  )
}

export default Likebutton