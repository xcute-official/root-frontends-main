"use client";
import { FormInput, FormTextarea } from '@/app/components/inputs'
import { useRouter } from 'next/navigation';
import React from 'react'
import { Button } from '@/app/components/buttons';
import { FieldValues, useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import ErrorMessage from '@/app/components/error-message';
import SuccessMessage from '@/app/components/success-message';
import { BiLoader } from 'react-icons/bi';
import clsx from 'clsx';
import { ICON_S_SIZE } from '@/app/constants';
import { ImageLinkInput } from '@/app/components/image-uploads';
import { initNote } from '@/app/actions/notes';
import { NoteInitSchema } from '@/app/schemas/notes';

const NoteInitialize = () => {


    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        getValues,
        watch
    } = useForm<FieldValues>({
        defaultValues: {
            title: '',
            description: '',
            imageLink: ''
        }
    });



    const router = useRouter();

    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onSubmit: SubmitHandler<FieldValues> = (data)=>{
        setIsLoading(true);
        setSuccess('');
        setError('');
        const validation = NoteInitSchema.safeParse(data);
        if(!validation.success){
            setError("Invalid data!");
            setIsLoading(false);
            return;
        }
        initNote(data).then((response)=>{
            if(response?.error){
                setError(response.error);
            }else if(response?.success){
                setSuccess(response.success);
                router.push(response.redirectedTo);
            }else{
                setError("Unknown Error!");
            }
        }).catch((error)=>{
            console.log(error);
            setError("Unknown Error");
        }).finally(()=>setIsLoading(false));
    }

  return (
    <div className='flex flex-col gap-6'>
        <div>
            <h1>initialize Note</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
            <div className='flex flex-col gap-4'>
                <FormInput disabled={isLoading} label='Title' register={register} errors={errors} id='title' />
                <FormTextarea disabled={isLoading} label='Description' register={register} errors={errors} id='description' />
                <ImageLinkInput watchValues={watch} disabled={isLoading} label='Image link' register={register} errors={errors} id='imageLink' getValues={getValues} />
            </div>
            <div>
                <ErrorMessage message={error} />
                <SuccessMessage message={success} />
            </div>
            <Button fullWidth disabled={isLoading} type='submit'>
                {
                    isLoading ? (
                        <div className='flex items-center gap-2'>
                            <BiLoader className={clsx(ICON_S_SIZE, 'animate-spin')} />
                            <span>Creating Note</span>
                        </div>
                    ) : (
                        <div>
                            <span>Create Note</span>
                        </div>
                    )
                }
            </Button>
        </form>
    </div>
  )
}

export default NoteInitialize