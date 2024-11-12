import React from 'react'
import { TbExclamationCircle } from 'react-icons/tb';
import { ICON_S_SIZE } from '../constants';
interface ErrorMessageProps {
  message?: string;
}
const ErrorMessage: React.FC<ErrorMessageProps> = ({message}) => {
  if(!message){
    return null;
  }
  return (
    <div className='flex items-center gap-2 p-2 rounded-md border-red-600 bg-red-100 text-red-600'>
      <TbExclamationCircle className={ICON_S_SIZE}/>
      <span>{message}</span>
    </div>
  )
}

export default ErrorMessage