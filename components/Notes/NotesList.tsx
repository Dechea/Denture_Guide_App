'use client';

import { ChangeEvent, useState } from 'react';

type notes = {
  text: string;
};

export const NotesList = ({
  data,
  addData,
  resetData,
}: {
  data: notes[];
  addData: Function;
  resetData: Function;
}) => {
  const [note, setNote] = useState('');

  const onChangeNote = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const onClickCreateNoteButton = () => {
    addData([...data, { text: note }]);

    fetch('/api/notes/createNote', {
      method: 'POST',
      body: JSON.stringify({ text: note }),
    })
      .then((res) => res.json())
      .catch((error) => {
        resetData(data, note, 'text');
        console.log({ error });
      })
      .finally(() => {
        setNote('');
      });
  };

  return (
    <>
      {data?.map((note, index) => (
        <div key={index}>{note.text}</div>
      ))}

      <div>
        <input onChange={onChangeNote} value={note} />
        <button onClick={onClickCreateNoteButton}>Add Note</button>
      </div>
    </>
  );
};
