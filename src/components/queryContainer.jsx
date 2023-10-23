import React from 'react';
import '../css/queryContainer.css';


export default function QueryContainer({style, image, image_alt, title, text}) {
  return (
    <div className='app-q-container'>
        <div className='container' style={style}>
            <div className='image-container'>
                <img src={image} alt={image_alt} />
            </div>
            <div className='text-container'>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    </div>
  )
}