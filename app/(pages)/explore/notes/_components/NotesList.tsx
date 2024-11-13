import { db } from '@/app/libs/db'
import { JsonValue } from '@prisma/client/runtime/react-native.js';
import React from 'react'

const NotesList = async () => {
    const notesList = await db.note.findMany();
    if(!notesList || !notesList.length) {
        return (
            <div>
                nothing found.
            </div>
        )
    }
  return (
    <div>
        <ul>
            {
                notesList.map((note, index)=>(
                    <li key={index}>
                        <div>{note.title}</div>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default NotesList