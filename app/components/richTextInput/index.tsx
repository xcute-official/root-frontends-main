"use client";
import { EditorContent, JSONContent, useEditor } from "@tiptap/react";
import React from "react";
import EditorExtensions from "./Extensions";
import Toolbar from "./Toolbar";
interface RichTextInputProps {
    onChange: (jsonContent: JSONContent)=>void;
    content: JSONContent | null;
    disabled?: boolean;
}
export const RichTextInput: React.FC<RichTextInputProps> = ({
    onChange, content, disabled
})=>{
    const editor = useEditor({
        extensions: EditorExtensions,
        content: content,
        onUpdate: ({editor})=>{
            onChange(editor.getJSON())
        },
        editorProps: {
            attributes: {
                class: '',
                spellcheck: "false"
            }
        }
    })
    return (
        <div>
            <Toolbar />
            <div>
                <EditorContent editor={editor}/>
            </div>
        </div>
    )
}