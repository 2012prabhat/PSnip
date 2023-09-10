import { useState } from 'react';
import { auth } from "./Firebase"
import { sendPasswordResetEmail} from 'firebase/auth';
import todoBack from '../images/todoBack.png'
import { showErrorCard } from '../App';


const PasswordResetComponent = () => {
  const [email, setEmail] = useState('');
//   const [isResetEmailSent, setIsResetEmailSent] = useState(false);
//   const [error, setError] = useState(null);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth,email);
      showErrorCard('Reset password link is sucessfully send to your email','success');
      e.target.reset()
    //   setIsResetEmailSent(true);
    //   setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error sending password reset email:', error.message);
    //   setError(error.message);
    }
  };

  return (
    <div className="loginCont">
    <div className="loginLeft">
      <img src={todoBack} />
    </div>
    <form className="loginRight" onSubmit={(e)=>handleResetPassword(e)}>
      {/* <div className="appName">
      PSnipp
      </div> */}
      <div className='appName'>Enter Your email to receive the password reset link</div>
      <div class="input-field">
        <i class="fas fa-user" aria-hidden="true"></i>
<input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

      </div>
     
      <button className="loginBtn">Submit</button>
      {/* <div className="signupTag">Don't have an account? <a href="/signup">Signup</a></div> */}
    </form>
  </div>
  );
};

export default PasswordResetComponent;
