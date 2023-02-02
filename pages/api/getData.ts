export const runtime = 'nodejs';

import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../src/fauna';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = JSON.parse(req.body);

  const data = await (
    await client.query({ query: body.query, arguments: {} })
  ).data;

  res.status(200).json(data);
}
