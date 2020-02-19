import React from 'react';

const Searh = ({onChange, placeholder}) => {
  return (
    <input type="text" onChange={onChange} placeholder={placeholder}/>
  )
}

export default Searh;