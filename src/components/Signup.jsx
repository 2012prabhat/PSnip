import React from 'react'
import todoBack from "../images/todoBack.png";
import { getAuth,sendEmailVerification, createUserWithEmailAndPassword,updateProfile} from 'firebase/auth';
import { auth} from "./Firebase"
import { useNavigate } from 'react-router-dom';
import { showErrorCard } from '../App';

function Signup() {
    const navigate = useNavigate();
    const handleSignup = async (e) => {
        
        e.preventDefault();
        try {
            const email = e.target.email.value;
            const password = e.target.password.value;
            const confirmPass = e.target.confirmPass.value;
            const name = e.target.name.value;
            if(confirmPass !== password){
             return showErrorCard('Password and Confirm Password are not same',"error");
            }
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            updateProfile(user,{
                displayName:name
               })
            console.log('User created as:', user);
            // Send email verification
      // await user.sendEmailVerification();
      await sendEmailVerification(user);
      // Optionally, you can sign the user out after registration and redirect them to a login page
      // await auth.signOut();

      // Display a message to the user indicating that a verification email has been sent
      showErrorCard('Verification email sent. Please check your inbox.','success');
      setTimeout( navigate('/dashboard'),2000)
           
        } catch (error) {
          console.error('Error signing up:', error.message);
          if((error.message).includes('already-in-use')) showErrorCard('This Email is Already in Use','error');
        }
    }
  return (
    <div className="loginCont">
    <div className="loginLeft">
      <img src={todoBack} />
    </div>
    <form className="loginRight" onSubmit={(e)=>handleSignup(e)}>
      <div className="appName">
         PSnipp
      </div>
      <div class="input-field">
        <i class="fas fa-user" aria-hidden="true"></i>
        <input type="text" placeholder="Name" name="name" required/>
      </div>
      <div class="input-field">
        <i class="fas fa-envelope" aria-hidden="true"></i>
        <input type="email" placeholder="Email" name="email" required/>
      </div>
      <div class="input-field">
        <i class="fas fa-lock" aria-hidden="true"></i>
        <input type="password" placeholder="Password" name="password" required/>
      </div>
      <div class="input-field">
        <i class="fas fa-lock" aria-hidden="true"></i>
        <input type="password" placeholder="Confirm Password" name="confirmPass" required/>
      </div>
      <button className="loginBtn">Sign up</button>
      <div className="signupTag">Already have an account? <a href="/">Login</a></div>
    </form>
  </div>
  )
}

export default Signup