"use client";
import clsx from 'clsx';
import { IoMdClose } from 'react-icons/io';
interface ModalProps {
    children: React.ReactNode;
    show: boolean;
    setShow: (state: boolean)=>void;
}
const Modal: React.FC<ModalProps> = ({
    children, show, setShow
}) => {
  return show ? (
    <div className='absolute top-0 left-0 w-screen min-h-screen z-10 bg-slate-50 bg-opacity-50 flex items-center justify-center'>
        <div className='mt-16 shadow flex flex-col gap-4 p-4 rounded-md bg-slate-800 text-white w-[50vw]'>
            <div className='flex justify-end'>
                <IoMdClose onClick={()=>setShow(false)} className={clsx('cursor-pointer hover:border p-1 rounded-md')} size={30} />
            </div>
            <div>
                {children}
            </div>
        </div>
    </div>
  ) : null;
}

export default Modal