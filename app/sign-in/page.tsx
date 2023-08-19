import { SignIn } from '@clerk/nextjs';
import { View } from 'reshaped';

const Page = () => {
  return (
    <View direction='row' align='center' justify='center' height='100vh'>
      <SignIn />
    </View>
  );
};

export default Page;
