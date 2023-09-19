import { SignIn } from '@clerk/nextjs';

const Page = () => {
  return (
    <div className='flex flex-row items-center justify-center h-screen'>
      <SignIn redirectUrl={'/organizations/sync'} />
    </div>
  );
};

export default Page;
