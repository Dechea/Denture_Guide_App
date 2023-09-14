import { SignIn } from '@clerk/nextjs';

const Page = () => {
  return (
    <div className='flex flex-row items-center justify-center h-screen'>
      <SignIn />
    </div>
  );
};

export default Page;
