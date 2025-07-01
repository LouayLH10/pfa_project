import React from 'react'
import Button from './Button'
import { useRouter } from 'next/navigation';

function Card({titcrs,desc,img,id}) {
  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  }
  const router= useRouter();
  const handleClick = () => {
    router.push('/startcourse?id=' + id);

    
  }
  return (
    <div className='card'>
<div className='crs-tit'>
{    titcrs }
</div>
<img src={img} />
<div className='crs-desc'>
{truncateText(desc, 10)}
</div>
<div className='cre-jn'>
    <Button type='button' txt='Join Now' handle={handleClick}/>
     </div>
    </div>
  )
}

export default Card