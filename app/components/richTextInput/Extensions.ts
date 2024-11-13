import Image from "@tiptap/extension-image";
import { NodeViewProps } from "@tiptap/core";
import { NodeViewWrapper } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { ChainedCommands, Editor, mergeAttributes, Node, RawCommands } from "@tiptap/core";
import { ImageExtension } from "./customExtensions/image-extension";


const EditorExtensions = [
    StarterKit.configure({
        code: {
            HTMLAttributes: {
                class: ''
            }
        },
    }),
    // Image.configure({
    //     HTMLAttributes: {
    //         class: 'w-52 h-auto'
    //     }
    // })
    ImageExtension.configure({
        HTMLAttributes: {
            class: 'w-52 h-auto'
        }
    })
]
export default EditorExtensions;