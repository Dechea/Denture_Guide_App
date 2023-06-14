import { View } from 'reshaped';
import cx from 'classnames';

export const UpperRoot = ({
  children,
  customStyles,
}: {
  children: React.ReactNode;
  customStyles: string;
}) => {
  return (
    <View
      className={cx('upperroot', customStyles)}
      height='60.975609756%'
      width='100%'
      align='center'
      insetTop={0}
      position='absolute'
    >
      {children}
    </View>
  );
};
