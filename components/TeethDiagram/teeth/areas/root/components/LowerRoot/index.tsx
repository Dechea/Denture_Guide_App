import { View } from 'reshaped';
import cx from 'classnames';

export const LowerRoot = ({
  children,
  customStyles,
}: {
  children: React.ReactNode;
  customStyles: string;
}) => {
  return (
    <View
      className={cx('lowerroot ', customStyles)}
      height='60.975609756%'
      width='100%'
      align='center'
      insetBottom={0}
      position='absolute'
    >
      {children}
    </View>
  );
};
