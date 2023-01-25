import { Client } from "fauna";

const client: Client = new Client({
  secret: "fnAE7JmM5qAA19TSJxunLNLYFCqETG_c-NDMc83o",
  endpoint: new URL("https://db.eu.fauna.com/"),
  timeout_ms: 60_000,
});

export { client };
