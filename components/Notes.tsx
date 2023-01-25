import { fql } from "fauna";
import { client } from "../src/fauna";

export const Notes = () => {
  const collections = async () => {
    try {
      const res = await client.query(fql`Collection.create({name: "Note"})`);

      console.log({ res });
    } catch (error) {
      console.log({ error });
    }
  };

  collections();

  return <div>Notes</div>;
};
