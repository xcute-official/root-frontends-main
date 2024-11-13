import { mergeAttributes, Node, nodeInputRule } from '@tiptap/core';
import { match } from 'assert';
import { IoMdClose } from 'react-icons/io';
interface ImageOptions {
    inline: boolean,
    allowBase64: boolean,
    HTMLAttributes: Record<string, any>;
}
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        customImage: {
            setCustomImage: (options: {src: string, alt?: string, title?: string})=>ReturnType
        } 
    }
}
export const inputRegex = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/;
export const ImageExtension = Node.create<ImageOptions>({
    name: 'customImage',
    addOptions(){
        return {
            inline: false,
            allowBase64: false,
            HTMLAttributes: {
                class: 'rounded-md'
            }
        }
    },
    inline(){
        return this.options.inline;
    },
    group(){
        return this.options.inline ? 'inline' : 'block'
    },
    draggable: true,
    addAttributes(){
        return {
            src: {
                default: null,
            },
            alt:  {
                default: null
            },
            title: {
                default: null
            }
        }
    },
    parseHTML(){
        return [
            {
                tag: this.options.allowBase64 ? 'img[src]' : 'img[src]:not([src^="data:"])'
            }
        ]
    },
    renderHTML({HTMLAttributes}){
        return [
            'div',
            {
                class: 'relative w-fit h-fit inline-block image-wrapper', 
            },
            ['img',
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)],
            [
                'button',
                {
                    type: 'button',
                    class: 'absolute top-2 right-2 bg-red-500 text-white rounded-md px-2 py-1.5 cursor-pointer',
                    onClick: 'this.closest(".image-wrapper").remove()'
                },
                'Delete',
            ]
        ]
    },
    addCommands(){
        return {
            setCustomImage: options => ({commands}) => {
                return commands.insertContent({
                    type: this.name,
                    attrs: options
                })
            }
        }
    },
    addInputRules(){
        return [
            nodeInputRule({
                find: inputRegex,
                type: this.type,
                getAttributes: match => {
                    const [,, alt, src, title] = match;
                    return {src, alt, title}
                }
            })
        ]
    }
})