import React from 'react'

export const GifGridItem = ({id,title,url}) => {
    return (
    <div className="gif-item animate__animated animate__bounce">
        <img src={url} alt={title}/>
    </div>
  )
}
