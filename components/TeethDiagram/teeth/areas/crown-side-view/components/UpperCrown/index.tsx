import { View } from 'reshaped';
import { CrownSideViewContainerProps } from '../../interfaces/props';
import cx from 'classnames';

export const UpperCrown = ({
  children,
  customStyles,
}: CrownSideViewContainerProps) => {
  return (
    <View
      className={cx('uppercrown', customStyles)}
      width='100%'
      height='39.024390243%'
      align='center'
      insetBottom={0}
      position='absolute'
    >
      {children}
    </View>
  );
};
