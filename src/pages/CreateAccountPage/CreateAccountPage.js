import React from 'react'
import './CreateAccountPage.scss';

const  CreateAccountPage = () => {
  return (
<>
<h1>Create an Account</h1>
    <div class="container">
      

    <form>

    {/* <!-- Fulde Navn -->
    <!-- An element kan have more than one class, now we have two class -->
    <!-- always the right side class take place, the one you write last --> */}
       <div class="form-control "> 
            <label for="firstname">Name</label>
            <input type="text" name="firstname" id="firstname" placeholder="write your name" class="inp-error"></input> 
             
        </div>

        <div class="form-control">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Skriv din email"/>
                {/* <span class="email-error">email-error</span>  */}
            </div>

        <div>
        <button type="button" onclick="validateForm(this.form)">Register</button>
        </div>

    </form>
    
</div>
</>


  )

  }

  
  

export default CreateAccountPage;