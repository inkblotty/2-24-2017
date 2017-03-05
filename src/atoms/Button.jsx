import React from 'react';

function Button(props) {
  let newClass = props.class ? props.class : 'btn';  
  return (
      <input type={ props.type } className={ newClass } onClick={ props.onClick } value={ props.text } />
  )
}

export default Button;
