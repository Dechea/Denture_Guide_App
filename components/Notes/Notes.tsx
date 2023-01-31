'use client';

import Fetcher from './Fetcher';
import { NotesList } from './NotesList';

export default function Notes() {
  return (
    // @ts-expect-error
    <Fetcher query={`Note.all.paginate(500)`}>
      <NotesList data={[]} addData={() => {}} resetData={() => {}} />
    </Fetcher>
  );
}
