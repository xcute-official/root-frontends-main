"use client";
import { FormInput, FormTextarea } from '@/app/components/inputs';

import React from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@/app/components/buttons';

const NoteForm = () => {
    const {
        register,
        formState: {
            errors
        },
        handleSubmit
    } = useForm<FieldValues>({
        defaultValues: {
            title: '',
            description: '',
            categories: [], 
            image: ''
        }
    });
    const onSubmit: SubmitHandler<FieldValues> = (data)=>{
        if(data){
            return;
        }
        return;
    }
  return (
    <div>
        <div>
            <h1>Note</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <FormInput id='title' label='Title' register={register} errors={errors} />
                <FormTextarea id='description' label='Description' register={register} errors={errors} />
            </div>
            <Button type="button">Next</Button>
        </form>
    </div>
  )
}

export default NoteForm