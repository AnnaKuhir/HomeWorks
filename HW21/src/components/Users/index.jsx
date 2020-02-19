import React from 'react';
import './style.scss';
import UserCard from '../UserCard'
import Search from '../Search'

const Users = ({usersArr, setUsersArr}) => {
    const handleRemoveUser = (indexOfUser) => {
        return ()=>{
            const newArr = usersArr.filter((_, i) => i !== indexOfUser)
            localStorage.setItem('users', JSON.stringify(newArr))
            setUsersArr(newArr);
        }
    }

    const handleSearch = e =>{
        const filteredUsers = usersArr.filter( user => {
            let value = e.target.value;
            return user.name.toLowerCase().includes(value.toLowerCase());
        })
        setUsersArr(filteredUsers);
    }


    return (
    
        <div className="users">
             <div className="search-users">
                <Search onChange={handleSearch} placeholder="Enter name"/>
            </div>
            {usersArr.map ((user, i)  => {
                return <UserCard  {...user} key = {user.name+user.age+i} handleRemoveUser={handleRemoveUser(i)}/>
            })}
        </div>
    
    );
}

export default Users;