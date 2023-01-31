import { fql } from 'fauna';
import { client } from '../../src/fauna';
import { NotesList } from './NotesList';

export default async function Notes() {
  const notes = (await client.query(fql`Note.all.paginate(500)`)).data?.data;

  // console.log({ notes });
  // const collections = async () => {
  //   try {
  //     // const createCollection = await client.query(fql`Collection.create({name: "Note"})`);
  //     // console.log({ createCollection });

  //     // const getCollections = await client.query(fql`Collection.all`);
  //     // console.log({ getCollections: getCollections.data.data });

  //     // const createNote = await client.query(fql`Note.create({text: "First Note"})`);
  //     // console.log({ createNote });

  //     const notes = await (await client.query(fql`Note.all`)).data?.data;
  //     console.log({ notes });
  //   } catch (error) {
  //     console.log({ error });
  //   }
  // };

  // collections();

  return <NotesList notes={notes} />;
}
