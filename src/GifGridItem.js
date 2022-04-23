import React from 'react'

export const GifGridItem = ({id,title,url}) => {
    return (
    <div className="wachin animate__animated animate__bounce">
        <img src={url} alt={title}/>
    </div>
  )
}
