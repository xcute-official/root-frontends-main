"use client";
import { EditorContent, JSONContent, useEditor } from "@tiptap/react";
import React, { useState } from "react";
import EditorExtensions from "@/app/components/richTextInput/Extensions";
import Toolbar from "@/app/components/richTextInput/Toolbar";
import NoteContentToolbar from "./NoteContentToolbar";
export const NoteContent= ()=>{
    const [content, setContent] = useState<JSONContent | null>(null);
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
    })
    return (
        <div className="w-full" id="NoteContent">
            <div className="w-full flex absolute top-20 right-0">
              <NoteContentToolbar editor={editor} />
            </div>
            <div className="md:px-16 mt-20 font-serif">
                <EditorContent editor={editor}/>
            </div>
        </div>
    )
}