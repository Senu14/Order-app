import React from 'react'

const  CreateAccountPage = () => {
  return (
     <>
{/* //   <FormComponantStayle> */}
    <h1>Create an Account</h1>

    <form action="" >
    <label htmlFor="name">Name</label>
    <input type="text"  />
    <label htmlFor="email">Email</label>
    <input type="email" />
    <label htmlFor="password">Password</label>
    <input type="password"name="password" />
    <button type="text">Register</button>
  </form>
  {/* </FormComponantStayle> */}
  </>

  )
}

export default CreateAccountPage