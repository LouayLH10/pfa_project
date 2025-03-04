import React from 'react'

function Authbtn({ty,id,d}) {
  return (
 <button type="button" id={id} className="authbutton ">
<svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
<path fillRule="evenodd" d={d} clipRule="evenodd"/>
</svg>
{ty}
</button>
  )
}

export default Authbtn