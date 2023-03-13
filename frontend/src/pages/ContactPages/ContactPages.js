import React from 'react';
import { useForm } from 'react-hook-dom';

const ContactPages = ()=> {
     const { register, handleSubmit, formState: { errors } } = useForm();
     const onSubmit = data => console.log(data);
   
     return (
   <>  

<div className="container">

<form>



   <div className="form-control "> 
        <label for="firstname">Name</label>
        <input {...register('name',{required:true})}/>
        {errors.name && <span>write your full name</span>}
         
    </div>

    <div className="form-control">
        <label for="email">Email</label>
        <input {...register('email',{required:true})}/>
        {errors.email && <span>write your email</span>}
   
    </div>

    <div className="form-control">
        <label for="bio">Consult</label>
       <textarea type="text" name="bio" id="bio" placeholder="Write your message" cols="40" rows="6"></textarea >
    </div>
    
    <div>
    <button type="button">Send</button>
    </div>

</form>

</div>
</>
     )
}

export default ContactPages;
