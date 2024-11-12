import React from 'react';
import { Editor } from '@tiptap/react';
import { TbBlockquote, TbBold, TbCode, TbH1, TbH3, TbH5, TbHeading, TbItalic, TbSourceCode, TbStrikethrough } from 'react-icons/tb';
import { ICON_S_SIZE } from '@/app/constants';
import clsx from 'clsx';
import { IconsManifest } from 'react-icons';
import { CiUndo } from 'react-icons/ci';
import { LuRedo, LuUndo } from 'react-icons/lu';
interface ToolbarProps {
  editor: Editor | null;
}
const Toolbar: React.FC<ToolbarProps> = ({
  editor
}) => {
  if(!editor){
    return null;
  }
  return (
    <div>
      <div>
        <button 
          onClick={()=>editor.chain().focus().toggleBold().run()} 
          disabled={!editor.can().chain().focus().toggleBold().run()} 
          className={editor.isActive("bold") ? "is-active" : ""}><TbBold className={clsx(
            ICON_S_SIZE
        )}/></button>
        <button 
          onClick={()=>editor.chain().focus().toggleItalic().run()} 
          disabled={!editor.can().chain().focus().toggleItalic().run()} 
          className={editor.isActive("italic") ? "is-active" : ""}><TbItalic className={clsx(
            ICON_S_SIZE
        )}/></button>
        <button 
          onClick={()=>editor.chain().focus().toggleStrike().run()} 
          disabled={!editor.can().chain().focus().toggleStrike().run()} 
          className={editor.isActive("strike") ? "is-active" : ""}><TbStrikethrough className={clsx(
            ICON_S_SIZE
        )}/></button>
        <button 
          onClick={()=>editor.chain().focus().toggleCode().run()} 
          disabled={!editor.can().chain().focus().toggleCode().run()} 
          className={editor.isActive("code") ? "is-active" : ""}><TbCode className={clsx(
            ICON_S_SIZE
        )}/></button>
        <button 
          onClick={()=>editor.chain().focus().toggleCodeBlock().run()} 
          disabled={!editor.can().chain().focus().toggleCodeBlock().run()} 
          className={editor.isActive("codeBlock") ? "is-active" : ""}><TbSourceCode className={clsx(
            ICON_S_SIZE
        )}/></button>
        <button 
          onClick={()=>editor.chain().focus().toggleHeading({level: 1}).run()} 
          disabled={!editor.can().chain().focus().toggleHeading({level: 1}).run()} 
          className={editor.isActive("heading", {level: 1}) ? "is-active" : ""}><TbH1 className={clsx(
            ICON_S_SIZE
        )}/></button>
        <button 
          onClick={()=>editor.chain().focus().toggleHeading({level: 3}).run()} 
          disabled={!editor.can().chain().focus().toggleHeading({level: 3}).run()} 
          className={editor.isActive("heading", {level: 3}) ? "is-active" : ""}><TbH3 className={clsx(
            ICON_S_SIZE
        )}/></button>
        <button 
          onClick={()=>editor.chain().focus().toggleHeading({level: 5}).run()} 
          disabled={!editor.can().chain().focus().toggleHeading({level: 5}).run()} 
          className={editor.isActive("heading", {level: 5}) ? "is-active" : ""}><TbH5 className={clsx(
            ICON_S_SIZE
        )}/></button>
        <button 
          onClick={()=>editor.chain().focus().toggleBlockquote().run()} 
          disabled={!editor.can().chain().focus().toggleBlockquote().run()} 
          className={editor.isActive("blockquote") ? "is-active" : ""}><TbBlockquote className={clsx(
            ICON_S_SIZE
        )}/></button>
        <button 
          onClick={()=>editor.chain().focus().undo().run()} 
          disabled={!editor.can().chain().focus().undo().run()} 
          className={clsx(

          )}><LuUndo className={clsx(
            ICON_S_SIZE
        )}/></button>
        <button 
          onClick={()=>editor.chain().focus().redo().run()} 
          disabled={!editor.can().chain().focus().redo().run()} 
          className={clsx(

          )}><LuRedo className={clsx(
            ICON_S_SIZE
        )}/></button>

      </div>
    </div>
  )
}

export default Toolbar