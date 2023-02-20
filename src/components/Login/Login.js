import { TextField, makeStyles, } from '@material-ui/core';
import icon from "../../images/login-icon.png"

import React from 'react'
import "./login.css"

const useStyles = makeStyles({
    loginInput:{
        fontSize:"3rem",
        color:"red"
    }
});
function Login() {
    const classes = useStyles();
  return (
    <main className='login-container'>
        <div className='login-title'>
            <h1><span>Ins</span>crever-se</h1>
        </div>
        <div className='login-icon'>
            <img src={icon} alt='icon'/>
        </div>
        <div className='login-text'>
            <form Validate autoComplete="off">
                <div className='input-container'>
                    <TextField id="standard-basic" 
                    label="Email" 
                    className={classes.loginInput} 
                    size='lager'
                    required
                    />
                </div>
                <div className='input-container'>
                    <TextField id="standard-basic"
                    label="Password"
                    type={'password'}
                    className={classes.loginInput}
                    required/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    </main>
  )
}

export default Login