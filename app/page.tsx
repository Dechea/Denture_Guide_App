export const runtime = 'nodejs';

import { Suspense } from 'react';
import Notes from '../components/Notes/Notes';
import { Link } from '../components/Reshaped/Reshaped';

export default function Home() {
  return (
    <>
      <Link href='/teeth-diagram'>Teeth Diagram</Link>
      <Suspense fallback={<div>...Loading</div>}>
        <Notes />
      </Suspense>
    </>
  );
}
