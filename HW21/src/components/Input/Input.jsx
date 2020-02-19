import React from 'react';
import './style.scss'

const Input = ({type, onChange, name, placeholder, value}) =>{
  return (
    <input  type={type}
            onChange={onChange}
            name={name}
            placeholder={placeholder}
            value={value}
     />
  )
}

export default Input;