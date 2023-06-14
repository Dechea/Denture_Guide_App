import { View, Icon, Text } from 'reshaped';
import SearchIcon from '../Icons/Search';

export default function NoResult() {
  return (
    <View justify='center' align='center' height='100%' gap={8}>
      <View
        align='center'
        justify='center'
        backgroundColor='neutral-faded'
        width='64px'
        height='64px'
        borderRadius='small'
      >
        <Icon size={8} svg={SearchIcon} />
      </View>
      <View.Item>
        <View align='center'>
          <Text variant='featured-2'>No results found</Text>
          <Text variant='body-1'>Try to type another name</Text>
        </View>
      </View.Item>
    </View>
  );
}
