import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';


const App = () => {
    const [usersArr, setUsersArr] = useState(() => {
        const users = localStorage.getItem('users');
        if (users) {
            return JSON.parse(users);
        }
        return [];
    });

    

    useEffect(() => {
        console.log(usersArr);
    });
    return (
        <div className="app">
            <Header />
            <Main usersArr={usersArr}
                setUsersArr={setUsersArr}
                />
            <Footer usersArr={usersArr} />

        </div>
    );
}

export default App;