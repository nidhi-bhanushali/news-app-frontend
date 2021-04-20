import React , { useState } from 'react';

export const Register = () => {
    const [user , setUser] = useState({
        name: '',
        email: '',
        password:'',
        password2: ''
    });

    const { name , email , password , password2 } = user;

    const onChange = e => setUser({...user , [e.target.name] : e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        if(name === '' || email === '' || password === '') {
            alert('Please enter all fields');
        }else if(password !== password2){
            alert('Passwords do not match');
        }else{
            console.log('Register submit');
        }  
    };

    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Register</span>
            </h1>
            <form onSubmit = {onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" onChange={onChange} value={name}/>
                </div> 
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={onChange} value={email}/>
                </div>   
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password" name="password2" onChange={onChange}/>
                </div>
                <input type="submit" value="Register" className="btn btn-primary btn-block"/>
            </form>            
        </div>
    )
}

export default Register;
