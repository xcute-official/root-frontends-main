import React from 'react'
import { TbCircleCheck, TbExclamationCircle } from 'react-icons/tb';
import { ICON_S_SIZE } from '../constants';
interface SuccessMessageProps {
  message?: string;
}
const SuccessMessage: React.FC<SuccessMessageProps> = ({message}) => {
  if(!message){
    return null;
  }
  return (
    <div className='flex items-center gap-2 p-2 rounded-md border-emerald-600 bg-emerald-100 text-emerald-600'>
      <TbCircleCheck className={ICON_S_SIZE}/>
      <span>{message}</span>
    </div>
  )
}

export default SuccessMessage;