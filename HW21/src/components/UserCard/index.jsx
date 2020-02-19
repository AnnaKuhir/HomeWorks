import React from 'react';
import './style.scss';
import Button from '../Button';

const UserCard = (props) => {
    const {name, surname, address, age, handleRemoveUser} = props;
    return (
        <div className="user-card">
            <p>Name: {name}</p>
            <p>Surname: {surname}</p>
            <p>Address: {address}</p>
            <p>Age: {age}</p>
            <Button className="button-remove" onClick={handleRemoveUser}>Remove</Button>
        </div>
    );
}

export default UserCard;