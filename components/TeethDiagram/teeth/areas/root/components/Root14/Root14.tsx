import { View } from 'reshaped';
import { RootProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';

function Root14({ children, customStyles }: RootProps) {
  return (
    <View insetBottom={0} height='100%' className={customStyles} width='33.82%'>
      {children}
    </View>
  );
}

export default withEnable(Root14);
