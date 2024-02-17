import React, { useState } from 'react'
import Img1 from './heart.png'
import Img2 from './heart (1).png'

export default function Like({like}) {
    
  // let like=false;
  return (
    <div className='h-5 w-5'>
      {like && <img src={Img1}></img>}
      {!like && <img src={Img2}></img>}
    </div>
  )
}
