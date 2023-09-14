import { SignUp } from '@clerk/nextjs';

const Page = () => {
  return (
    <div className='flex flex-row items-center justify-center h-screen'>
      <SignUp />
    </div>
  );
};

export default Page;
