export const runtime = 'nodejs';

import { Notes } from "../components/Notes";
import { Link } from "../components/Reshaped/Reshaped";

export default function Home() {
  return (
    <>
      <Link href="/teeth-diagram">Teeth Diagram</Link>
      <Notes />
    </>
  );
}
