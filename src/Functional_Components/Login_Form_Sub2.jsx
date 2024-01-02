import '../Assets/Styles/Login_Form_Sub2.css';
import { useState } from "react";
import {FaGoogle,FaApple} from 'react-icons/fa';
import { useNavigate,Link } from 'react-router-dom';

export function LOGIN_FORM(){
    const [inputData,setInputData]=useState({email:'',password:''});
    const [inputErr,setInputErr]=useState({emailErr:'',passwordErr:''});
    
    localStorage.setItem('email','govardhanreddy.c5@gmail.com');
    localStorage.setItem('password','Govardhan@6300');
    let userEmail=localStorage.getItem('email');
    let userPassword=localStorage.getItem('password');
    const navigate=useNavigate();

    function inputHandler(event){
        const {name,value}=event.target;
        setInputData({...inputData,[name]:value});
        if(inputData.email!==''){
            setInputErr({
                emailErr:'',
            })
            console.log(inputErr.passwordErr);
        }
        else if(inputData.password!==''){
            setInputErr({
                passwordErr:''
            })
            console.log(inputErr.emailErr);
        }
    }

    function SubmitHandler(event){
        event.preventDefault();

        if(inputData.email==='' && inputData.password===''){
            setInputErr({
                emailErr:'Enter your email..',
                passwordErr:'Enter your password..'
            })
        }
        else if((inputData.email==='' && inputData.password!=='') || (inputData.email!=='' && inputData.password==='')){
            if(inputData.email==='' && inputData.password!==''){
                setInputErr({
                    emailErr:'Enter your email...'
                })
            }
            else if(inputData.email!=='' && inputData.password===''){
                setInputErr({
                    passwordErr:'Enter your password...'
                })
            }
        }
        else if(inputData.email!=='' && inputData.password!==''){
            if(inputData.email===userEmail && inputData.password===userPassword){
                navigate('/dashboard');
            }
            else{
                setInputErr({
                    emailErr:'Enter valid email only...',
                    passwordErr:'Enter valid password only...'
                })
                console.log('Clicked2!');
            }
        }
    }

    return(
        <div className='login-form-div'>
            <div className='login-form-sub'>
                <h1>Sign In</h1>
                <h4 className='h4-tag-sign-in'>Sign in to your account</h4>
                <div className='alternative-sign-in-div'>
                    <button type="submit" className='google-apple-sign-in'>
                        <FaGoogle className="sign-in-icon"/>
                        <p>Sign in with Google</p>
                    </button>
                    <button type="submit" className='google-apple-sign-in'>
                        <FaApple className="sign-in-icon"/>
                        <p>Sign in with Apple</p>
                    </button>
                </div>

                <form className='form_elements' onSubmit={SubmitHandler}>
                    <label htmlFor="email">Email address</label><br />
                    <input type="text" name="email" id="email" value={inputData.email} onChange={inputHandler} placeholder="Enter your email.."/>
                    {(inputData.email.trim()==='' || inputData.email!==userEmail) && <span className='error-msg'>{inputErr.emailErr}</span>}<br/>
                    
                    <label htmlFor="password">Password</label><br />
                    <input type="password" name="password" id="password" value={inputData.password} onChange={inputHandler} placeholder="Enter your password.."/>
                    {(inputData.password.trim()==='' || inputData.password!==userPassword) && <span className='error-msg'>{inputErr.passwordErr}</span>} <br />

                    <Link to='/forget-password' className='forget-password'>Forget password?</Link><br />
                    <button type="submit" className='sign-in'>Sign In</button>
                </form>
                <p className='new-account'>Don't have an account? <Link to='/register-now' className='register-now'>Register here</Link></p>
            </div>
        </div>
    )
}