import React from 'react'
import "./ui.css"

function Button({ type, txt, val, handle,data }) {
  return (
    <button
      className='signbutton'
      type={type}
      id={type} // 
      disabled={val}
      onClick={handle} 
      data-id={data} // Utilisation de txt comme identifiant
    >
      {txt}
    </button>
  );
}

export default Button
