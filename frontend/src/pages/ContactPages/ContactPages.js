import React from 'react';
import { useForm } from 'react-hook-form';
import "./ContactPages.scss"

const ContactPages = ()=> {
     const { register, handleSubmit, formState: { errors } } = useForm();
     const onSubmit = data => console.log(data);
   
     return (
   <>  

<div className="container">

<form onSubmit={handleSubmit(onsubmit)}>
    <h1 className='contact'>Contact us</h1>



   <div className="form-control "> 
        <label for="firstname">Name</label>
        <input className='work'{...register('name',{required:true})}/>
        {errors.name && <span>write your full name</span>}
         
    </div>

    <div className="form-control">
        <label for="email">Email</label>
        <input className='work' {...register('email',{required:true})}/>
        {errors.email && <span>write your email</span>}
   
    </div>

    <div className="form-control">
        <label for="bio">Consult</label>
       <textarea type="text" name="bio" id="bio" placeholder="Write your message" cols="40" rows="6"></textarea >
    </div>
    
    <div>
    <button  className= "call" type="button">Send</button>
    </div>

</form>

</div>
</>
     )
}

export default ContactPages;
