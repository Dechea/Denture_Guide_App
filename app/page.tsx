/** @jsxImportSource @emotion/react */
'use client';

import FetchUsers from '../components/FetchNotes';
import { Link } from '../components/Reshaped/Reshaped';

export default function Home() {
  return (
    <>
      <Link href='/teeth-diagram'>Teeth Diagram</Link>
      <FetchUsers />
    </>
  );
}
