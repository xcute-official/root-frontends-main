import StarterKit from "@tiptap/starter-kit";

const EditorExtensions = [
    StarterKit.configure({
        code: {
            HTMLAttributes: {
                class: ''
            }
        },
    })
]
export default EditorExtensions;