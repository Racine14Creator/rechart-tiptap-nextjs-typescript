"use client"

import React from 'react'

import StarterKit from '@tiptap/starter-kit'
import { useEditor, EditorContent } from '@tiptap/react'
import { BoldIcon } from 'lucide-react'

export default function RichTextEditor() {
    const editor = useEditor({
        extensions: [
            StarterKit
        ],
        content: '<p>Hello World</p>'
    })

    const MenuBar = () => {
        if (!editor) {
            return null
        }

        return (
            <div className='flex flex-row gap-x-5 text-black'>
                <div className='text-white relative bg-black w-10 h-10 flex justify-center items-center rounded-lg'>
                    <button
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        className={editor.isActive('bold') ? 'is-active bg-blue-300' : ''}
                    >
                        <BoldIcon className='w-5 h-5' />
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className='border border-gray-300 bg-white/20 p-5 rounded-md'>
            <MenuBar />
            <EditorContent editor={editor} />
        </div>
    )
}
