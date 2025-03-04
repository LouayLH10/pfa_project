"use client"; 
import React, { useState } from 'react'
import Button from './Button'
import Authbtn from './Authbtn'
import Link from 'next/link';

function Form({typ}) {
  const [selectedValue, setSelectedValue] = useState("0");

  return (
    <div className='frmpage'>
      <form className="max-w-sm mx-auto">
  
     {typ === "SIN" ? (
 <>
 <div className='formtitle signintt'>SIGN-IN</div>
 <div className='contenu'>
        {[
        { id: "email", label: "Email address", type: "email" },
        { id: "password", label: "Password", type: "password" },
        { id: "repeat_password", label: "Confirm password", type: "password" },
        { id: "first_name", label: "First name", type: "text" },
        { id: "last_name", label: "Last name", type: "text" },
        { id: "user_name", label: "User Name", type: "text" },
        { id: "phone", label: "Phone number", type: "tel" }
     
      ].map(({ id, label, type }, index) => (
        <div key={id} className={`relative z-0 w-full mb-5 group ${index >= 3 ? "md:w-1/2 md:inline-block md:px-2" : ""}`}>
          <input
            type={type}
            name={id}
            id={id}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none light:text-white light:border-gray-600 light:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor={id}
            className="peer-focus:font-medium absolute text-sm text-gray-500 light:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:light:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            {label}
          </label>
        </div>
      ))}
  <label htmlFor="countries" className="peer-focus:font-medium absolute text-sm text-gray-500 light:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:light:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Select an option
      </label>
      <select  id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
    <option value="0">Select your role</option>
    <option value="te">Teacher</option>
    <option value="st">Student</option>

  </select>
  <Link href="/auth/login">Login ?</Link>
 
 <Button type="submit" txt="SIGN IN"/>

<Authbtn ty="Sign in with Google" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" id="googlesignin" />
<Authbtn ty="Sign in with Facebook" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" id="fbsignin" />
 </div>
</>
    ) : typ==="LOGIN" ?  (
        <>
         <div className='formtitle logtt'>LOGIN</div>
 <div className='contenu'>
        {[
        { id: "email", label: "Email address", type: "email" },
        { id: "password", label: "Password", type: "password" }
     
      ].map(({ id, label, type }, index) => (
        <div key={id} className={`relative z-0 w-full mb-5 group ${index >= 3 ? "md:w-1/2 md:inline-block md:px-2" : ""}`}>
          <input
            type={type}
            name={id}
            id={id}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none light:text-white light:border-gray-600 light:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor={id}
            className="peer-focus:font-medium absolute text-sm text-gray-500 light:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:light:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            {label}
          </label>
        </div>
      ))}
<Link href="/auth/signin">Create an account?</Link>
<br/>
<Link href="/auth/forgotpwd">Forgot password?</Link>
 <Button txt={"LOGIN"} type={"submit"}/>

<Authbtn ty="Login with Google" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" id="googlesignin" />
<Authbtn ty="Login with Facebook" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" id="fbsignin" />
 </div>
        </>
       
      ):(
        <>
        <div className='formtitle logtt'>Forgot your password</div>
<div className='contenu'>
       {[
       { id: "email", label: "Email address", type: "email" }
    
     ].map(({ id, label, type }, index) => (
       <div key={id} className={`relative z-0 w-full mb-5 group ${index >= 3 ? "md:w-1/2 md:inline-block md:px-2" : ""}`}>
         <input
           type={type}
           name={id}
           id={id}
           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none light:text-white light:border-gray-600 light:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
           placeholder=" "
           required
         />
         <label
           htmlFor={id}
           className="peer-focus:font-medium absolute text-sm text-gray-500 light:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:light:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
         >
           {label}
         </label>
       </div>
     ))}

<Button txt={"Verify your Email"} type={"submit"} />

</div>
       </>
      )
    }
  </form>
  <div className='Sticker'>
<img src="/loginST.png" alt="st"/>

  </div>
  </div>
  )
}

export default Form