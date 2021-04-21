import React , { useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/auth/authContext'


export const Login = (props) => {
    const authContext = useContext(AuthContext);

    const { login, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {

        if(isAuthenticated){
            props.history.push('/')
        }

        if(error === 'Invalid Credentials'){
            alert(error);
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history])


    const [user , setUser] = useState({
        email: '',
        password:''
    });

    const { email , password } = user;

    const onChange = e => setUser({...user, [e.target.name] : e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        if(email === '' || password === '') {
            alert('Please enter all fields');
        }else{
            login({
                email,
                password
            });
        }  
    }

    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Login</span>
            </h1>
            <form onSubmit = {onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={onChange} value={email}/>
                </div>   
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={onChange}/>
                </div>
                <input type="submit" value="Login" className="btn btn-primary btn-block"/>
            </form>            
        </div>
    );
};

export default Login;
