import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  function handleSubmit(event){
    event.preventDefault();
    axios.post('http://localhost:3000/login',{email,password})
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
  return (
    <div className = 'd-flex vh-100 justify-content-center align-items-center bg-primary'>
      <div className='p-3 bg-white w-25 '>
          <form onSubmit={handleSubmit}>
            <div className='mb-3 '>
              <label for="email">Email: </label>
              <input type = "email" placeholder="Enter Email" maxlength = "30" className='form-control'
              onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className='mb-3'>
              <label for="password">Password: </label>
              <input type = "password" placeholder="Enter Password" maxlength = "30" className='form-control'
              onChange={e => setPassword(e.target.value)}/>
            </div>
              <button type="submit" className='btn btn-success'>Submit</button>
          </form>
        </div>
    </div>
  )
}

export default SignIn