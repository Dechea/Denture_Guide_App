import { View } from 'reshaped';
import { CrownSideViewContainerProps } from '../../interfaces/props';
import cx from 'classnames';

export const LowerCrown = ({
  children,
  customStyles,
}: CrownSideViewContainerProps) => {
  return (
    <View
      className={cx('lowercrown', customStyles)}
      width='100%'
      height='39.024390243%'
      align='center'
      justify='end'
      position='absolute'
    >
      {children}
    </View>
  );
};
