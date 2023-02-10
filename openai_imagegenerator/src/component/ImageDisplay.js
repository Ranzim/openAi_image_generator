import React from 'react'

const ImageDisplay = ({imageUrl}) => {
  return (
    <div>
           <img src={imageUrl} alt="Generated " />
    </div>
  )
}

export default ImageDisplay