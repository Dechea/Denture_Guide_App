"use client";

import { ChangeEvent, useState } from "react";
import useQuery, { useQueryReturnType } from "../../src/fauna/useQuery";

type queryReturnType = useQueryReturnType & { data: { text: string }[] }

export default function Notes() {
  const [note, setNote] = useState("");

  const { data, isLoading, addData, resetData } = useQuery({
    query: "Note.all.paginate(500)",
  }) as queryReturnType;

  const onChangeNote = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const onClickCreateNoteButton = () => {
    addData([...data, { text: note }]);

    fetch("/api/notes/createNote", {
      method: "POST",
      body: JSON.stringify({ text: note }),
    })
      .then((res) => res.json())
      .catch((error) => {
        resetData(data, note, "text");
        console.log({ error });
      })
      .finally(() => {
        setNote("");
      });
  };

  return (
    <>
      {isLoading ? (
        <div>...Loading</div>
      ) : (
        <>
          {data?.map((note, index) => (
            <div key={index}>{note.text}</div>
          ))}

          <div>
            <input onChange={onChangeNote} value={note} />
            <button onClick={onClickCreateNoteButton}>Add Note</button>
          </div>
        </>
      )}
    </>
  );
}
