import React from 'react'
import "./ComponentStyles/BackgroundStyle.css"

const BackgroundStyle = () => {
  return (
    <div className="emoji-background">
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={i} className="emoji">
            {['😎', '🤪', '💃', '🦄', '🎉', '👻', '🐸', '🔥', '🌈', '🍕', '👽'][i % 11]}
          </span>
        ))}
    </div> 
  )
}

export default BackgroundStyle