import React from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {  toast } from 'react-toastify';
const SignPage = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        const email = data.email
        const password = data.password
        const confirmPassword = data.confirmPassword
        if(password === confirmPassword){
            createUserWithEmailAndPassword(email, password)
            toast("Succes your Accout")
        }else{
            alert("Your main password and confirm password are not same")
        }
        reset()
    };
    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
     
    return (
        <div>
             <h1 className='sign-title'>Create New Account</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-3">
                    
                    <input type="email" placeholder='Email' class="form-control input-body" {...register("email", { required: true })}
                        aria-invalid={errors.email ? "true" : "false"} />
                    <div id="emailHelp" class="form-text">{errors.email?.type === 'required' && <p className='text-danger' role="alert">Email is required</p>}</div>
                </div>
                <div class="mb-3">
                    
                    <input type="password" placeholder='Password' class="form-control input-body" id="exampleInputPassword1"  {...register("password", { required: true })}
                        aria-invalid={errors.password ? "true" : "false"} />
                    <div id="emailHelp" class="form-text">{errors.password?.type === 'required' && <p className='text-danger' role="alert">Password is required</p>}</div>
                </div>
                <div class="mb-3">
                    
                    <input type="password" placeholder='Confirm Password' class="form-control input-body" id="exampleInputPassword1" {...register("confirmPassword", { required: true })}
                        aria-invalid={errors.confirmPassword ? "true" : "false"} />
                    <div>{errors.confirmPassword?.type === 'required' && <p className='text-danger' role="alert">Confirm name is required</p>}</div>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" required />
                    <label class="form-check-label" for="exampleCheck1"> I agree with Tems & Conditions</label>
                </div>
                <button type="submit"  class="submit-btn">Create Account</button>
            </form>
        </div>
    );
};

export default SignPage;