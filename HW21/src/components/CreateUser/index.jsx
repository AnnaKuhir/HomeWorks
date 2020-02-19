import React, { useState } from 'react';
import './style.scss';
import Button from '../Button';
import Input from '../Input';

const CreateUser = (props) => {
    const {usersArr, setUsersArr} = props;

    const [form, setForm] = useState({
        name: '',
        surname: '',
        address: '',
        age: 0
    })

    const handleChange = e => {
        const {name, value} = e.target;
        const newForm = {...form, [name]: value}
        setForm(newForm)
    }

    const handleCreate = () =>{
            const users = [...usersArr, form];
            localStorage.setItem('users', JSON.stringify(users));
            setUsersArr(users);
            setForm( {
                name: '',
                surname: '',
                address: '',
                age: 0
            })
    }
    return (
        <div className="create-user">
            <h1>Create User</h1>
            <div>
                <Input type="text"
                       placeholder="Enter name" 
                       value={form.name} name="name" 
                       onChange = {handleChange}
                />
            </div>

            <div>
               <Input type="text"
                       placeholder="Enter surname" 
                       value={form.surname} name="surname" 
                       onChange = {handleChange}
                />
            </div>

            <div>
               <Input type="text"
                       placeholder="Enter address" 
                       value={form.address} name="address" 
                       onChange = {handleChange}
                />  
             </div>

            <div>
                <Input type="number" 
                       placeholder="Enter age" 
                       value={form.age} name="age" 
                       onChange = {handleChange}
                />
            </div>

            <Button className="button-create" onClick = {handleCreate}>Create</Button>
            
        </div>
    );
}

export default CreateUser;