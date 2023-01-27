'use client';

import { ChangeEvent, useState } from 'react';

type notes = {
  text: string;
};

export const NotesList = ({
  notes,
  onAddNote,
}: {
  notes: notes[];
  onAddNote?: Function;
}) => {
  const [tempNotes, setTempNotes] = useState(notes);
  const [note, setNote] = useState('');

  const onChangeNote = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const onClickCreateNoteButton = async () => {
    setTempNotes([...tempNotes, { text: note }]);
    try {
      // const res = await onAddNote(note);
      // console.log({ res });
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
