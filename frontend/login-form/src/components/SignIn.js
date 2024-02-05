import React from 'react'

function SignIn() {
  return (
    <div>
        <form>
            <label for="email">Email: </label>
            <input type = "email" placeholder="Enter Email" maxlength = "30"></input>
            <br></br>
            <label for="password">Password</label>
            <input type = "password" placeholder="Enter Password" maxlength = "20"></input>
            <br></br>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default SignIn