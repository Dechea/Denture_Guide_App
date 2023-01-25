import { Client, endpoints } from "fauna";

const client: Client = new Client({
  secret: process.env.FAUNA_DECHEA_ENV__ADMIN__TOKEN,
  // endpoint: new URL("https://db.eu.fauna.com/"),
  endpoint: endpoints.preview,

});

export { client };
