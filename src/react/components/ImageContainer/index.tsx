// Dependencies
import React from 'react'

interface ImageContainerProps {
  title: string
  imgURL: string
}

const ImageContainer: React.FC<ImageContainerProps> = ({ title, imgURL }) => (
  <div className="image-container">
    <div className="flex">
      <div className="mr5 mr7-l">
        <figure className="image-container-figure">
          <img src={imgURL} alt="preview" />
        </figure>
      </div>

      <div className="flex flex-column justify-center w-100">
        <h2 className="ma0 mb3 image-container-title">{title}</h2>
      </div>
    </div>
  </div>
)

export default ImageContainer
