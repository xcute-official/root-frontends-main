"use client";

import clsx from "clsx";

interface ButtonProps {
    onClick?: ()=>void;
    type?: 'submit' | 'reset' | 'button' | undefined;
    children: React.ReactNode;
    fullWidth?: boolean;
    disabled?: boolean;
}
export const Button: React.FC<ButtonProps> = ({
    onClick, type, children, fullWidth, disabled
})=>{
    return (
        <button className={clsx(
            "flex items-center justify-center px-4 py-1 rounded-md",
            fullWidth && 'w-full',
            'bg-foreground text-background border text-sm font-bold rounded-md px-4 py-2'
        )} type={type} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    )
}