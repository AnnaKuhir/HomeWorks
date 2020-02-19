import React from 'react';
import './style.scss';
import CreateUser from '../../components/CreateUser';
import Users from '../../components/Users';


const Main = props => {
  const {usersArr, setUsersArr} = props;

  return (
    <main>
    <CreateUser usersArr={usersArr} 
                setUsersArr={setUsersArr}
               
    />
    <Users usersArr={usersArr} 
           setUsersArr= {setUsersArr}
    /> 
    </main>
  )
}

export default Main;
