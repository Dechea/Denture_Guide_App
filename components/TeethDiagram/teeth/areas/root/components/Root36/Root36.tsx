import { View } from 'reshaped';
import { RootProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';

function Root36({ children, customStyles }: RootProps) {
  return (
    <View width='45.58%' insetTop={0} height='100%' className={customStyles}>
      {children}
    </View>
  );
}

export default withEnable(Root36);
