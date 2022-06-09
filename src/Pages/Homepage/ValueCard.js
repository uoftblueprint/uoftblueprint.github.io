import React from 'react'

export default function ValueCard(props) {
  const image = props.image
  const title = props.title

  return (
    <div className="value-container">
      <img className="value-icons" src={image} />
      <div className="value-text">
        <p className="sub-text">{title}</p>
        <p>{props.children}</p>
      </div>
    </div>

  )
}