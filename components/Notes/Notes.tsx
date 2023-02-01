'use client';

import Fetcher from './Fetcher';
import { NotesList } from './NotesList';

export default function Notes() {
  return (
    // Below error resolution is not supported in next 13 so we need to disable it.
    // @ts-expect-error
    <Fetcher query={`Note.all.paginate(500)`}>
      <NotesList data={[]} addData={() => {}} resetData={() => {}} />
    </Fetcher>
  );
}
