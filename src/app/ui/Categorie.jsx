import React from 'react'

function Categorie({cat,img}) {
  return (
    <div className='categorie'>
        <img src={img}/>
        <div className='txt'>
{cat}
</div>
    </div>
  )
}

export default Categorie