import React from 'react'
import "./ui.css"
function Button({type,txt}) {
  return (
    <button className='signbutton'type={type} id={{type}}>
        {txt}
        </button>
  )
}

export default Button