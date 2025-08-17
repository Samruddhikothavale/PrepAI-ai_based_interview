
import React, { useState } from 'react'

function SignUp() {
    const [profilePic,setProfilePic] =useState(null);
    const [fullName,setfullName] =useState(null);
    const [email,setemail] =useState(null);
    const [password,setpassword] =useState(null);

    const [error,setError] =useState(null);

    const navigate = useNavigate();

    const handlesubmit = async (e) => {
        e.preventDefault();
    };


  return (
    <div className='w-[90vw] md:w-[33vw] p-7' >
        <h3 className=''>Create an Account</h3>
        <p>Enter your details</p>
        <form onSubmit={handlesubmit}>
            <div className="">
    const [password,setProfilePic] =useState(null);
    const [password,setProfilePic] =useState(null);
                <input type="text" value={fullName} 
                onChange={({target}) => setfullName(target.value)} 
                lable ="full name" placeholder='enter name'/>

                <input type="email" value={email} 
                onChange={({target}) => setemail(target.value)} 
                lable ="email" placeholder='Enter Email'/>

                <input type="password" name="password" id="password" 
                value={password} onChange={({target}) => setpassword(target.value)} />



            </div>

            {error && <p className=''>{error}</p>}

            <button type="submit">Sign Up</button>

            <p> Already an account? {""}
                <button className='' onClick={() => {setCurrentPage("login");}}>Login</button>
            </p>
        </form>
    </div>
  )
}

export default SignUp