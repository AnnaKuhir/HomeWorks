import React from 'react';
import './style.scss';

const Footer = (props) => {
 const {usersArr} = props;

  return(
    <div className="footer">
      <h1>Total count: {usersArr.length}</h1>
    </div>
  )
}

export default Footer;