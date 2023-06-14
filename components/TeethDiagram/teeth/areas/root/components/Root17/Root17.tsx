import { View } from 'reshaped';
import { RootProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';

function Root17({ children, customStyles }: RootProps) {
  return (
    <View
      insetBottom={0}
      height='100%'
      className={customStyles}
      width='45.588235294%'
    >
      {children}
    </View>
  );
}

export default withEnable(Root17);
