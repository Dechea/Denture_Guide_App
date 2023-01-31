export const runtime = 'nodejs';

import { fql } from 'fauna';
import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../src/fauna';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = JSON.parse(req.body);
  const createNoteRes = await client.query(fql`Note.create(${body})`);

  res.status(200).json(createNoteRes);
}
