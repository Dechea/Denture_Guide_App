"use client"
// import { useAuth } from "@clerk/nextjs";
import { Suspense, useState } from "react";
import { useQuery, useMutation } from "../src/gqty";

// TODO We need to rewrite to use SSR
function Fetch() {

    // const { getToken } = useAuth();

    // getToken({ template: 'fauna' }).then((token) => { 
    //     console.log(token)
    //     window.localStorage.setItem("clerk-db-fauna-jwt", JSON.stringify(token));
    // })


    const query = useQuery({
        // boolean | undefined
        suspense: true,

        // boolean | object | number | string | null
        // If you put an object to trigger re-validation on-demand, it should be a `memoized` value from `useMemo`
        staleWhileRevalidate: true,

        // ((error: GQtyError) => void) | undefined
        onError(error) { },
    });

    // const [addNote, { isLoading, data, error }] = useMutation(
    //     (mutation, note: string) => {
    //         let data = {text: note}
    //       const {  } = mutation.createNote({data}).;

    //       if (Note) {
    //         return {
    //           Note,
    //         };
    //       }

    //       return {
    //         error,
    //       };
    //     },
    //     {
    //       onCompleted(data) {},
    //       onError(error) {},
    //     }
    //   );

    const [temporaryNote, setTemporaryNote] = useState('');

    return (
        <div>
            {query.notes({}).map(note => {
                return (
                    <div key={note.id}>{note.text.html}</div>
                );
            })}
            {/* <form>
                <label>Note</label>
                <input
                    value={}
                    onChange={(ev) => {
                        setTemporaryNote(ev.target.value),
          }}
                />

                <button
                    type="submit"
                    disabled={isLoading}
                    onClick={(ev) => {
                        ev.preventDefault();
                        query.notes.push(ev.target.value);
                        createNote(temporaryNote).catch(console.error);
                    }}
                >
                    Add note
                </button>
            </form> */}
        </div>
    );
}

export default function FetchUsers() {

    return (
        <Suspense fallback="Loading...">
            <Fetch />
        </Suspense>)
}