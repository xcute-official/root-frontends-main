import Image from "@tiptap/extension-image";
import StarterKit from "@tiptap/starter-kit";

const EditorExtensions = [
    StarterKit.configure({
        code: {
            HTMLAttributes: {
                class: ''
            }
        },
    }),
    Image.configure({
        HTMLAttributes: {
            class: 'w-52 h-auto'
        }
    })
]
export default EditorExtensions;