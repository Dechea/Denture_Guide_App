/**
 * @type {import("@gqty/cli").GQtyConfig}
 */
const config = {
  react: true,
  scalarTypes: { DateTime: "string" },
  introspection: {
    endpoint: "https://api-eu-central-1.hygraph.com/v2/cl1krj2ov7rl001z6bbold2ti/master",
    headers: {"Authorization": `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_DECHEA_TOKEN}`},
  },
  destination: "./src/gqty/index.ts",
  subscriptions: false,
  javascriptOutput: false,
  enumsAsConst: false,
};

module.exports = config;
