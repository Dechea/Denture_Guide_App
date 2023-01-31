import { fql } from 'fauna';
import Fetcher from './Fetcher';
import { NotesList } from './NotesList';

export default function Notes() {
  return (
    // @ts-expect-error
    <Fetcher query={fql`Note.all.paginate(500)`}>
      <NotesList data={[]} />
    </Fetcher>
  );
}
