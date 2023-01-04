import React from 'react';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="custom-input">
      <label htmlFor={props.id}> {props.label}</label>
      <input ref={ref} {...props}  />
    </div>
  )
});

export default Input;