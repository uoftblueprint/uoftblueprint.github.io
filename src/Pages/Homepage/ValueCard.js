import React from 'react'
import { Row } from 'react-bootstrap';

export default function ValueCard(props) {
  const image = props.image
  const title = props.title

  return (
    <div className='value-container m-2'>
      <div>
        <img className='value-icons' src={image} />
      </div>
      <div className='value-text'>
        <p className='sub-text'>{title}</p>
        <p>{props.children}</p>
      </div>
    </div>
  );
}