'use client';

import { ChangeEvent, useState } from 'react';

type notes = {
  text: string;
};

export const NotesList = ({ notes }: { notes: notes[] }) => {
  const [tempNotes, setTempNotes] = useState(notes);
  const [note, setNote] = useState('');

  const onChangeNote = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const onClickCreateNoteButton = async () => {
    setTempNotes([...tempNotes, { text: note }]);
    try {
      fetch('/api/notes', {
        method: 'POST',
        body: JSON.stringify({ text: note }),
      })
        .then((res) => res.json())
        .then((data) => console.log({ data }))
        .catch((err) => console.log({ err }));
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <>
      {tempNotes.map((note) => (
        <div>{note.text}</div>
      ))}

      <div>
        <input onChange={onChangeNote} value={note} />
        <button onClick={onClickCreateNoteButton}>Add Note</button>
      </div>
    </>
  );
};
