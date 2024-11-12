"use client";

import { FieldErrors, FieldValue, FieldValues, UseFormGetValues, UseFormRegister, UseFormWatch } from "react-hook-form";
import { FormInput, Input } from "./inputs";
import Image from "next/image";
import clsx from "clsx";
import { useEffect, useState } from "react";

interface ImageLinkInputProps {
    id: string;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    disabled?: boolean;
    label?: string;
    placeholder?: string;
    getValues: UseFormGetValues<FieldValues>;
    watchValues: UseFormWatch<FieldValues>;
}

export const ImageLinkInput: React.FC<ImageLinkInputProps> = ({
    id, register, errors, disabled, label, placeholder, getValues, watchValues
})=>{
    const [link, setLink] = useState<string>('');
    const watchLink = watchValues("imageLink");
    useEffect(()=>{
        setLink(watchLink);
    }, [watchLink]);
    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label className="text-sm text-slate-800" htmlFor={id}>{label}</label>
            )}
            <div className="mt-2">
                <input placeholder={placeholder} type="text" disabled={disabled} {...register(id, { required: true })} autoComplete={id} className={clsx(
                    'w-full px-2 py-1 rounded-md border focus:border-none bg-transparent text-foreground'
                )} />
            </div>
            <div className="w-52 h-52 relative">
                {link && (
                    <Image src={link} alt="invalid link" layout="fill" />
                )}
            </div>
        </div>
    )
}



export const ImageInput = ()=>{
    return (
        <div>

        </div>
    )
}