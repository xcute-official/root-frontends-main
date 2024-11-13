"use client";

import clsx from "clsx";
import { useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { ICON_S_SIZE } from "../constants";
import { TbEye, TbEyeOff } from "react-icons/tb";








interface FormInputProps {
    id: string;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;

    type?: string;
    placeholder?: string;
    label?: string;

    disabled?: boolean;
    required?: boolean;
}
export const FormInput: React.FC<FormInputProps> = ({
    id, register, errors, type, placeholder, label, disabled, required
})=>{
    return (
        <div>
            {label && (
                <label className="text-sm text-slate-800" htmlFor={id}>{label}</label>
            )}
            <div className="mt-2">
                <input placeholder={placeholder} type={type} disabled={disabled} {...register(id, { required })} autoComplete={id} className={clsx(
                    'w-full px-2 py-1 rounded-md border focus:border-none bg-transparent text-foreground',
                    errors && 'text-red-500'
                )} />
            </div>
        </div>
    )
}






interface FormPasswordInputProps {
    id: string;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;

    placeholder?: string;
    label?: string;

    disabled?: boolean;
    required?: boolean;
}
export const FormPasswordInput: React.FC<FormPasswordInputProps> = ({
    id, register, errors, placeholder, label, disabled, required
})=>{
    const [type, setType] = useState<'text'|'password'>('password');
    return (
        <div>
            {label && (
                <label className="text-sm text-slate-800" htmlFor={id}>{label}</label>
            )}
            <div className="mt-1 relative">
                <input placeholder={placeholder} type={type} disabled={disabled} {...register(id, { required })} autoComplete={id} className={clsx(
                    'w-full px-2 py-1 rounded-md border focus:border-none bg-transparent text-foreground',
                    errors && 'text-rose-500'
                )} />
                <span onClick={()=>setType(type==='password'?'text':'password')} className={clsx(
                    "absolute top-1 right-2",
                )}>
                    {
                        type==='password'?(
                            <TbEyeOff className={ICON_S_SIZE} />
                        ):(
                            <TbEye className={ICON_S_SIZE} />
                        )
                    }
                </span>
            </div>
        </div>
    )
}














interface FormTextareaProps {
    id: string;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;

    placeholder?: string;
    label?: string;

    disabled?: boolean;
    required?: boolean;
    doResize?: boolean;
}
export const FormTextarea: React.FC<FormTextareaProps> = ({
    id, register, errors, placeholder, label, disabled, required, doResize
})=>{
    return (
        <div>
            {label && (
                <label className="text-sm text-slate-800" htmlFor={id}>{label}</label>
            )}
            <div className="mt-2">
                <textarea spellCheck="false" placeholder={placeholder} disabled={disabled} {...register(id, { required })} autoComplete={id} className={clsx(
                    'w-full px-4 py-2 rounded-md border focus:border-none bg-transparent text-foreground',
                    !doResize && 'resize-none',
                    errors && 'text-rose-500'
                )}></textarea>
            </div>
        </div>
    )
}