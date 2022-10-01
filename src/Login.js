import React from 'react'
import './Login.css'
import { loginUrl } from './spotify'

function Login() {
  return (
    <div className='login'>
       <img src='https://digital.hbs.edu/platform-digit/wp-content/uploads/sites/2/2020/04/spotify-logo-1920x1080-2.jpg' alt=''/>
    <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login
