import React from 'react'
import './CreateAccountPage.scss';
import { useForm } from 'react-hook-form'

const  CreateAccountPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
<>

    <div className ="container">
      

    <form onSubmit={handleSubmit(onsubmit)}>
    <h1 className='title'>Create an Account</h1>


    {/* <!-- Fulde Navn -->
    <!-- An element kan have more than one class, now we have two class -->
    <!-- always the right side class take place, the one you write last --> */}
       <div className="form-control "> 
            <label for="firstname">Name</label>
            <input className='space' {...register('name',{required:true})}/>

            {errors.name && <span>write your full name</span>}
            {/* <input type="text" name="firstname" id="firstname" placeholder="write your name" class="inp-error"></input>  */}
             
        </div>
        <div className="form-control "> 
            <label for="email">Email</label>
            <input className='space' {...register('email',{required:true})}/>

            {errors.email && <span>write your email</span>}
            {/* <input type="text" name="firstname" id="firstname" placeholder="write your name" class="inp-error"></input>  */}
             
        </div>
        <div className="form-control "> 
            <label for="pasword">Password</label>
            <input className='space' {...register('password',{required:true})}/>

            {errors.password && <span>write your password</span>}
            {/* <input type="text" name="firstname" id="firstname" placeholder="write your name" class="inp-error"></input>  */}
             
        </div>


        <div>
        <button className='last' type="submit" >Register</button>
        </div>

    </form>
    
</div>
</>

 


  )

  }

  
  

export default CreateAccountPage;