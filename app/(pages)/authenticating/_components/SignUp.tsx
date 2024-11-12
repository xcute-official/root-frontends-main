"use client";
import React from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

const SignUp = () => {
    const onSubmit: SubmitHandler<FieldValues> = (data)=>{
        
    }
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            username: '',
            password: '',
            email: ''
        }
    });
  return (
    <div>
        <div>
            <h1>Signup</h1>
        </div>
        <form onSubmit={onSubmit}>
            <div>

            </div>
        </form>
    </div>
  )
}

export default SignUp