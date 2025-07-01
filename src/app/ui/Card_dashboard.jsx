import React from 'react'
import Button from './Button'

function Card({titcrs,desc}) {
  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  }
  return (
    <div className='card'>
<div className='crs-tit'>
{    titcrs }
</div>
<img src='/cardtest1.jpg' />
<div className='crs-desc'>
{truncateText(desc, 10)}
</div>
<div className='cre-jn'>
    <Button type='button' txt='Join Now'/>
     </div>
    </div>
  )
}

export default Card