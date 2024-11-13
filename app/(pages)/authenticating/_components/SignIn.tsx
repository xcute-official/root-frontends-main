"use client";
import { Button } from '@/app/components/buttons';
import ErrorMessage from '@/app/components/error-message';
import { FormInput, FormPasswordInput } from '@/app/components/inputs';
import SuccessMessage from '@/app/components/success-message';
import { ICON_S_SIZE } from '@/app/constants';
import { SigninSchema } from '@/app/schemas/auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { TbLoader } from 'react-icons/tb';
import { signin } from '@/app/actions/auth';
import clsx from 'clsx';

const SignIn = () => {

    const router = useRouter();

    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onSubmit: SubmitHandler<FieldValues> = (data)=>{
        setIsLoading(true);
        setSuccess('');
        setError('');
        const validation = SigninSchema.safeParse(data);
        if(!validation.success){
            setError('Invalid data!');
            return;
        }
        signin(data).then((response)=>{
            if(response?.error){
                setError(response.error);
            }else if(response?.success){
                setSuccess(response.success);
                router.push(`/lggdn/user/${response.data.username}/`);
            }else{
                setError("Unknown error");
            }
        }).catch((error)=>{console.error(error);setError("Unknown error, please try again")}).finally(()=>setIsLoading(false))
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
            password: ''
        }
    });
  return (
    <div className="flex flex-col gap-6">
        <div>
            <h1 className='font-bold text-4xl'>SignIn</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
            <div className='flex flex-col gap-4'>
                <FormInput label='Username' placeholder='john doe' register={register} errors={errors} id='username'/>
                <FormPasswordInput label='Password' placeholder='password' register={register} errors={errors} id='password'/>
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
                            <span>Signing In</span>
                        </div>
                    ) : (
                        <div className='flex items-center gap-2'>
                            <span>SignIn</span>
                        </div>
                    )
                }
            </Button>
        </form>
        <div>
            <Link href={'/authenticating/signup'}>
                <div>
                    <span>Don&apo;t have an account? </span>
                    <span>sign up</span>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default SignIn;