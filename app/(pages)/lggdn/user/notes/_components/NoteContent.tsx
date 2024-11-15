"use client";
import { EditorContent, JSONContent, useEditor } from "@tiptap/react";
import Modal from "@/app/components/modal";
import React, { useEffect, useState } from "react";
import EditorExtensions from "@/app/components/richTextInput/Extensions";

import NoteContentToolbar from "./NoteContentToolbar";
import { useDebounce } from "@/app/hooks/useDebounce";
import { useParams } from "next/navigation";
import { saveNote } from "@/app/actions/notes";
import clsx from "clsx";
export const NoteContent = ()=>{

    const {id} = useParams();
    const [content, setContent] = useState<JSONContent | null>(null);
    const [modalState, setModalState] = useState<string>('');
    const [show, setShow] = useState<boolean>(false);

    const editor = useEditor({
        extensions: EditorExtensions,
        content: content,
        onUpdate: ({editor})=>{
            setContent(editor.getJSON())
        },
        editorProps: {
            attributes: {
                class: 'outline-none flex flex-col gap-2',
                spellcheck: "false"
            }
        },
        immediatelyRender: false
    });

    const debouncedContent = useDebounce(content, 1000);
    useEffect(()=>{
        if(!debouncedContent) return;
        saveNote(id as string, debouncedContent).then((response)=>{
            if(response.success){
                console.log("ok");
            }else{
                console.log("not ok");
            }
        })
    }, [debouncedContent, id]);
    return (
        <div className="w-full" id="NoteContent">
            <Modal show={show} setShow={(state: boolean)=>setShow(state)}>
                {
                    modalState==='imageLink' && (
                        <div className="flex flex-col gap-2">
                            <label className="text-white">Image link</label>
                            <input spellCheck="false" type="text" className={clsx(
                                'w-full px-4 py-2 rounded-md border focus:border-none text-white bg-transparent text-foreground'
                            )} onChange={(e)=>editor?.chain().setCustomImage({src: e.target.value}).run()}/>
                        </div>
                    )
                }
            </Modal>
            <div className="w-full flex absolute top-20">
              <NoteContentToolbar setShow={(showing: boolean)=>setShow(showing)} setModalState={(state: string)=>setModalState(state)} editor={editor} savingState={false}/>
            </div>
            <div className="md:px-16 mt-20">
                <EditorContent editor={editor}/>
            </div>
        </div>
    )
}