import { View, Loader as ReshapedLoader } from 'reshaped';

export default function Loader() {
  return (
    <View height='100%' width='100%' justify='center' align='center'>
      <ReshapedLoader size='medium' />
    </View>
  );
}
