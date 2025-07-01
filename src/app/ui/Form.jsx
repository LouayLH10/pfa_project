"use client"; 
import React, { useEffect, useState, forwardRef } from 'react';
import Button from './Button';
import Authbtn from './Authbtn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUser } from '../context/UserContext';
import Rep from './Rep';

const Form = forwardRef(({ typ, handle, error, refs,nbchap,handleChange,nq,handlechap,hc,auth }, ref) => {
  const [selectedValue, setSelectedValue] = useState("0");
  const path = usePathname();
  const {userInfo}  = useUser() || {};
  
  useEffect(() => {
 
    
    if (typeof window !== 'undefined' && window.location.pathname === "/profile" ||window.location.pathname.includes("/quiz")  ) {
      const sticker = document.querySelector('.Sticker');
      const frm = document.querySelector('form');
      
      if (frm) {
        frm.style.width = "100%";
      }

      if (sticker) {
        sticker.style.display = 'none';
      }
    }
  }, []);

  const renderInputs = (fields) => {
    return fields.map(({ id, label, type, ref,defaultValue,readOnly }, index) => (
      <div key={id} className={`relative z-0 w-full mb-5 group ${index >= 3 ? "md:w-1/2 md:inline-block md:px-2" : ""}`}>
        <input
          ref={ref}  // Associating the ref here
          type={type}
          name={id}
          id={id}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none light:text-white light:border-gray-600 light:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          defaultValue={defaultValue}
          placeholder=''
          readOnly={readOnly}
          onChange={handleChange}
          required
        />
        <label
          htmlFor={id}
          className="peer-focus:font-medium absolute text-sm text-gray-500 light:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:light:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          {label}
        </label>
      </div>
    ));
  };

  
  
    const [responses, setResponses] = useState(
      Array.from({ length: Number(nq) }, () => [0, 1]) 
    );
    useEffect(() => {
      setResponses(Array.from({ length: Number(nq) }, () => [0, 1]));
    }, [nq]);
    const handleAddResponse = (questionIndex) => {

      setResponses((prev) =>
        prev.map((resps, idx) =>
          idx === questionIndex ? [...resps, resps.length] : resps
        )
      );
    };
      const [questions, setQuestions] = useState({});

  const handleChange1 = (e) => {
    const { id, value } = e.target;
    setQuestions((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className='frmpage'>
      <form className="max-w-sm mx-auto"  method="POST" onSubmit={(e) => handle(e)}>
        {typ === "SIN" && (
          <>
            <div className='formtitle signintt'>SIGN-IN</div>
            <div className='error-message' id="error-message">{error}</div>
            <div className='contenu'>
              {renderInputs([
                { id: "email", label: "Email address", type: "email", ref: refs.emailRef },
                { id: "password", label: "Password", type: "password", ref: refs.passwordRef },
                { id: "cpassword", label: "Confirm password", type: "password", ref: refs.confirmPasswordRef },
                { id: "first_name", label: "First name", type: "text", ref: refs.firstnameRef },
                { id: "last_name", label: "Last name", type: "text", ref: refs.lastnameRef },
                { id: "user_name", label: "User Name", type: "text", ref: refs.usernameRef },
                { id: "phone", label: "Phone number", type: "tel", ref: refs.phoneRef }
              ])}
              <Link href="/auth/login">Login ?</Link>
              <Button type="submit" txt="SIGN IN" handle={handle} />
            </div>
          </>
        )}
        {typ === "LOGIN" && (
          <>
            <div className='formtitle logtt'>LOGIN</div>
            <div className='error-message' id="error-message">{error}</div>

            <div className='contenu'>
              {renderInputs([
                { id: "email", label: "Email address", type: "email",ref:refs.emailLoRef },
                { id: "password", label: "Password", type: "password",ref:refs.pwdRef }
              ])}
              <Link href="/auth/signin">Create an account?</Link>
              <br />
              <Link href="/auth/forgotpwd">Forgot password?</Link>
              <Button txt="LOGIN" type="submit" handle={handle} />
<hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
              <Authbtn ty="Login with Google" auth={auth} d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" id="googlesignin" />
            </div>
          </>
        )}
        {typ==="VERIF" &&(
          <>
                      <div className='formtitle verif'>Verify your Email</div>
                      <div className='error-message' id="error-message">{error}</div>
            <div className='contenu'>
              {renderInputs([
                { id: "code", label: "Verification code", type: "number", className:"no-spinner", ref:refs.codeRef }
              ])}

              <Button txt="SUBMIT" type="submit" handle={handle} />
          
          </div>
          
          </>
        )

        }{typ==="ROLE" &&(
          <>
          <div className='formtitle verif'>Account As</div>
          <div className='error-message' id="error-message">{error}</div>
<div className='contenu'>
<label htmlFor="context" className="block mb-2 text-sm font-medium text-gray-900 light:text-white">
Account As
        </label>
        <select
          id="context"
          ref={refs.roleRef}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
        >
          <option value="" disabled>Select a context</option>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
        </select>

  <Button txt="SUBMIT" type="submit" handle={handle} />
  </div>
  </>

        )

        }
        {typ==="PROFIL" &&(
          <>
                                <div className='formtitle profile'>{(userInfo?.firstname || "").charAt(0).toUpperCase() + (userInfo?.firstname || "").slice(1)} {(userInfo?.lastname || "").charAt(0).toUpperCase() + (userInfo?.lastname || "").slice(1)}
                                </div>
                      <div className='error-message' id="error-message">{error}</div>
            <div className='contenu'>
                {renderInputs([
                  { id: "user_name", label: "User Name", type: "text", className:"no-spinner " ,defaultValue:userInfo?.username ,ref:refs.usernameRef },
                  { id: "email", label: "Email", type: "text", className:"no-spinner " ,defaultValue:userInfo?.email,readOnly: true },
                  { id: "bio", label: "Bio", type: "text", className:"no-spinner username3" ,defaultValue:userInfo?.bio,ref:refs.bioRef },
                  { id: "first_name", label: "First name", type: "text",defaultValue:userInfo?.firstname,ref:refs.firstnameRef },
                  { id: "last_name", label: "Last name", type: "text",defaultValue:userInfo?.lastname,ref:refs.lastnameRef },
                  { id: "password", label: "Password", type: "password",ref:refs.pwd },
                  { id: "cpassword", label: "Confirm password", type: "password",ref:refs.cpwd },
                
              ])}

              <Button txt="Modify your profile" type="submit" handle={handle} />
          
          </div>
          
          
          </>
        )

        }
              {typ === "ADDCRS" && (
  <>
    <div className='formtitle Cours part1'>ADD COURSE</div>
    <div className='error-message' id="error-message">{error}</div>
    <div className='contenu'>
      {renderInputs([
        { id: "crs", label: "Cours Name", type: "text", className: "no-spinner", ref: refs.coursenameRef },
        { id: "nbrschpter", label: "Numbers of chapters", type: "number", className: "no-spinner", ref: refs.coursenbchapRef },
        { id: "description", label: "Description", type: "text", className: "no-spinner username3", ref: refs.coursedescRef },
        { id: "price", label: "Price", type: "number", className: "no-spinner", ref: refs.priceRef },
        { id: "image", label: "Image", type: "file", className: "no-spinner", ref: refs.courseimgRef },
      ])}
        <select
          id="category"
      ref={refs.categoryRef}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
        >
          <option value="0" >Please select the category of your course</option>
          <option value="IT">IT-Developpment</option>
          <option value="MATH">Mathematique</option>
          <option value="MAR">Marketing</option>
          <option value="DS">Data Science</option>
        </select>
         
      <Button txt="Next" type="submit" handle={handle} />
    </div>
  </>
)}
{typ === "ADDCHAP" && (
  <>
    <div className='formtitle Cours part2'>CHAPTERS</div>
    <div className='error-message' id="error-message">{error}</div>
    <div className='contenu'>
      <div className='chapter'>
        {Array.from({ length: Number(nbchap) || 0 }).map((_, i) => (
          <div key={i} className="relative z-0 w-full mb-5 group">
            {renderInputs([
              {
                id: `chapter${i + 1}`,
                label: `Chapter ${i + 1} Name`,
                type: "text",
                ref: refs[`chapter${i + 1}`]
              },
              {
                id: `chapter${i + 1}desc`,
                label: `Chapter ${i + 1} Description`,
                type: "text",
                ref: refs[`chapter${i + 1}desc`]
              },
              {
                id: `chapter${i + 1}pdf`,
                label: `Chapter ${i + 1} Course (PDF,MP4)`,
                type: "file",
                ref: refs[`chapter${i + 1}pdf`]
              }
            ])}
            <Button
              txt={`Add a quiz for chapter ${i + 1}`}
              type="button"
              data={`${i + 1}`}
              handle={handlechap}
            />
          </div>
        ))}
      </div>
      <Button txt="Submit" type="button" handle={handle} />
    </div>
  </>
)}

{typ === "ADDQUIZ" && (
<>
  <div className='formtitle Cours part2'>QUIZ</div>
  <div className='error-message' id="error-message">{error}</div>
  <div className='contenu'>
    {renderInputs([
      { id: "nbq", label: "Number of questions", type: "number", className: "no-spinner", ref: refs.nbqRef, defaultValue: 5, onChange:handleChange },
  
    ])}
  
  <div className='questions'>
  {Array.from({ length: Number(nq) }).map((_, i) => (
    <div key={i} className="relative z-0 w-full mb-5 group">
      {renderInputs([
        {
          id: `question${i + 1}`,
          label: `Question ${i + 1}`,
          type: "text",
          placeholder: `Question ${i + 1}`,
          className: "no-spinner",
          ref: refs[`question${i + 1}`],
          onChange:handleChange
        }
      ])}

      <div className={`respoonses-Q${i + 1}`}>
        {responses[i]?.map((id) => (
      <Rep 
      key={id}
      id={id}
      questionIndex={i} // ou rd selon votre implémentation
 
      handleChange={hc} // Ici on passe la prop hc comme handleChange
    />
  
    

        ))}
        
      </div>

      <Button txt="Add Response" type="button" handle={() => handleAddResponse(i)} />

    </div>
  ))}

  <Button txt="Submit" type="button" handle={handle} />
</div>
  
  
    </div>




</>




)}
        {/* Vous pouvez appliquer la même logique à d'autres types de formulaire */}
      </form>
      <div className='Sticker'>
        <img src="/loginST.png" alt="st" />
      </div>
    </div>
  );
});

export default Form;