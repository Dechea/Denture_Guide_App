import { View } from 'reshaped';
import { RootProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';

function Root24({ children, customStyles }: RootProps) {
  return (
    <View width='33.82%' insetBottom={0} height='100%' className={customStyles}>
      {children}
    </View>
  );
}

export default withEnable(Root24);
