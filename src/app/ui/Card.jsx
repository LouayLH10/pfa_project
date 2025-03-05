import React from 'react'
import Button from './Button'

function Card() {
  return (
    <div className='card'>
<div className='crs-tit'>
    ReactJS Course
</div>
<img src='/cardtest1.jpg' />
<div className='crs-desc'>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ipsam asperiores voluptatum, modi saepe ipsum accusantium unde laboriosam voluptates delectus quasi ipsa iusto, cupiditate possimus? Tempore commodi nam doloremque eos.
</div>
<div className='cre-jn'>
    <Button type='button' txt='Join Now'/>
     </div>
    </div>
  )
}

export default Card