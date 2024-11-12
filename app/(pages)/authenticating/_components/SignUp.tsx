"use client";
import { Button } from '@/app/components/buttons';
import ErrorMessage from '@/app/components/error-message';
import { FormInput, FormPasswordInput } from '@/app/components/inputs';
import SuccessMessage from '@/app/components/success-message';
import { ICON_S_SIZE } from '@/app/constants';
import { SignupSchema } from '@/app/schemas/auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import React, { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { TbLoader } from 'react-icons/tb';
import { signup } from '@/app/actions/auth';
import clsx from 'clsx';

const SignUp = () => {

    const router = useRouter();

    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onSubmit: SubmitHandler<FieldValues> = (data)=>{
        setIsLoading(true);
        setSuccess('');
        setError('');
        const validation = SignupSchema.safeParse(data);
        if(!validation.success){
            setError('Invalid data!');
            return;
        }
        signup(data).then((response)=>{
            console.log(`RESPONSE_ `, response);
            if(response?.error){
                setError(response.error);
            }else if(response?.success){
                setSuccess(response.success);
            }else{
                setError("Unknown error");
            }
        }).catch(()=>setError("Unknown error, please try again")).finally(()=>setIsLoading(false))
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
    <div className='flex flex-col gap-4'>
        <div>
            <h1 className='font-bold text-4xl'>Signup</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
            <div className='flex flex-col gap-4'>
                <FormInput label='Username' placeholder='john doe' register={register} errors={errors} id='username'/>
                <FormInput label='Email' placeholder='john.doe@gmail.com' register={register} errors={errors} id='email'/>
                <FormPasswordInput label='Password' placeholder='iloveyou' register={register} errors={errors} id='password'/>
            </div>
            <div>
                <ErrorMessage message={error} />
                <SuccessMessage message={success} />
            </div>
            <Button type='submit'>
                {
                    isLoading ? (
                        <div className='flex items-center gap-2'>
                            <TbLoader className={clsx(ICON_S_SIZE, 'animate-spin')}/>
                            <span>Signing up</span>
                        </div>
                    ) : (
                        <div className='flex items-center gap-2'>
                            <span>Signup</span>
                        </div>
                    )
                }
            </Button>
        </form>
        <div>
            <Link href={'/authenticating/signin'}>
                <div>
                    <span>Already have an account? </span>
                    <span>signin</span>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default SignUp