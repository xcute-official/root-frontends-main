"use client";
import { Editor } from '@tiptap/react';
import { TbBlockquote, TbBold, TbCode, TbH1, TbH3, TbH5, TbImageInPicture, TbItalic, TbLoader, TbSourceCode, TbStrikethrough } from 'react-icons/tb';

import clsx from 'clsx';
import { LuRedo, LuUndo } from 'react-icons/lu';
import { ICON_XS_SIZE } from '@/app/constants';
interface NoteContentToolbarProps {
  editor: Editor | null;
  savingState: boolean | null;
  setModalState: (state: string)=>void;
  setShow: (state: boolean)=>void;
}
const buttons_class = "p-1 rounded-lg cursor-pointer";
const icons_class = `${ICON_XS_SIZE}`;
const on_active_class = "bg-foreground text-background";
const NoteContentToolbar: React.FC<NoteContentToolbarProps> = ({
  editor,
  savingState,
  setModalState,
  setShow
}) => {
  if(!editor){
    return null;
  }
  return (

    <div className='py-2 px-4 rounded-full border mx-auto'>
      <div className='flex items-center gap-4'>
        <button 
          onClick={()=>editor.chain().focus().toggleBold().run()} 
          disabled={!editor.can().chain().focus().toggleBold().run()} 
          className={clsx(
            editor.isActive("bold") && on_active_class,
            buttons_class
          )}><TbBold className={clsx(
            icons_class
        )}/></button>
        <button 
          onClick={()=>editor.chain().focus().toggleItalic().run()} 
          disabled={!editor.can().chain().focus().toggleItalic().run()} 
          className={clsx(
            editor.isActive("italic") && on_active_class,
            buttons_class
          )}><TbItalic className={clsx(
            icons_class
        )}/></button>
        <button 
          onClick={()=>editor.chain().focus().toggleStrike().run()} 
          disabled={!editor.can().chain().focus().toggleStrike().run()} 
          className={clsx(
            editor.isActive("strike") && on_active_class,
            buttons_class
          )}><TbStrikethrough className={clsx(
            icons_class
        )}/></button>
        <button 
          onClick={()=>editor.chain().focus().toggleCode().run()} 
          disabled={!editor.can().chain().focus().toggleCode().run()} 
          className={clsx(
            editor.isActive("code") && on_active_class,
            buttons_class
          )}><TbCode className={clsx(
            icons_class
        )}/></button>
        <button 
          onClick={()=>editor.chain().focus().toggleCodeBlock().run()} 
          disabled={!editor.can().chain().focus().toggleCodeBlock().run()} 
          className={clsx(
            editor.isActive("codeBlock") && on_active_class,
            buttons_class
          )}><TbSourceCode className={clsx(
            icons_class
        )}/></button>
        <button 
          onClick={()=>editor.chain().focus().toggleHeading({level: 1}).run()} 
          disabled={!editor.can().chain().focus().toggleHeading({level: 1}).run()} 
          className={clsx(
            editor.isActive("heading", {level: 1}) && on_active_class,
            buttons_class
          )}><TbH1 className={clsx(
            icons_class
        )}/></button>
        <button 
          onClick={()=>editor.chain().focus().toggleHeading({level: 3}).run()} 
          disabled={!editor.can().chain().focus().toggleHeading({level: 3}).run()} 
          className={clsx(
            editor.isActive("heading", {level: 3}) && on_active_class,
            buttons_class
          )}><TbH3 className={clsx(
            icons_class
        )}/></button>
        <button 
          onClick={()=>editor.chain().focus().toggleHeading({level: 5}).run()} 
          disabled={!editor.can().chain().focus().toggleHeading({level: 5}).run()} 
          className={clsx(
            editor.isActive("heading", {level: 5}) && on_active_class,
            buttons_class
          )}><TbH5 className={clsx(
            icons_class
        )}/></button>
        <button 
          onClick={()=>editor.chain().focus().toggleBlockquote().run()} 
          disabled={!editor.can().chain().focus().toggleBlockquote().run()} 
          className={clsx(
            editor.isActive("blockquote") && on_active_class,
            buttons_class
          )}><TbBlockquote className={clsx(
            icons_class
        )}/></button>
        <button 
          onClick={()=>editor.chain().focus().undo().run()} 
          disabled={!editor.can().chain().focus().undo().run()} 
          className={clsx(
            buttons_class
          )}><LuUndo className={clsx(
            icons_class
        )}/></button>
        <button 
          onClick={()=>editor.chain().focus().setHighlight('yellow').run()} 
          className={clsx(
            buttons_class
          )}>n</button>
        <button 
          onClick={()=>editor.chain().focus().redo().run()} 
          disabled={!editor.can().chain().focus().redo().run()} 
          className={clsx(
            buttons_class
          )}><LuRedo className={clsx(
            icons_class
        )}/></button>
        <button 
          onClick={()=>{
            setShow(true);
            setModalState('imageLink')
          }} 
          className={clsx(
            buttons_class
          )}><TbImageInPicture className={clsx(
            icons_class
        )}/></button>
        <button 
          onClick={()=>editor.chain().focus().redo().run()} 
          disabled={!editor.can().chain().focus().redo().run()} 
          className={clsx(
            'flex items-center gap-2 text-sm'
          )}><div>{
            savingState && (
              <div className='flex items-center gap-2 text-sm'>
                <TbLoader className={clsx(ICON_XS_SIZE, 'animate-spin')}/>
                <span>saving</span>
              </div>
            )
          }{
            savingState===null && (
              <div className='flex items-center gap-2 text-sm'>
                <span>not saved</span>
              </div>
            )
          }{
            savingState===false && (
              <div className='flex items-center gap-2 text-sm'>
                <span>saved</span>
              </div>
            )
          }
          </div>
        </button>
      </div>
    </div>
  )
}

export default NoteContentToolbar;