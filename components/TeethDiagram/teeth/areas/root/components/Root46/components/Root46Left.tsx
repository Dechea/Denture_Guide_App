import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../../interfaces/props';
import { withEnable } from '../../../../../hoc/withEnable';
import { toothId } from '../../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../../zustand/teethDiagram';

function Root46Left({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View
      width='58.065%'
      aspectRatio={18 / 50}
      position='absolute'
      className={cx('left-[3.225%] -top-[11.54%]', customStyles)}
    >
      <svg
        width='100%'
        viewBox='0 0 18 50'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId['46']}
      >
        <path
          d='M17.4676 5.39298L14.5369 3.90849C10.4902 1.85876 6.05048 0.700764 1.5185 0.511448C1.63131 1.33856 1.88947 2.76444 2.19766 4.46661C2.35878 5.35655 2.53359 6.32201 2.70843 7.3169C3.26005 10.4556 3.80936 13.8747 3.88381 15.962C4.05952 20.888 3.99106 26.4567 3.93033 31.3969C3.89152 34.5543 3.85586 37.455 3.88912 39.7669C3.92582 42.3172 4.28391 44.4859 4.80549 46.1262C5.33613 47.795 6.00709 48.8268 6.59921 49.2241C6.89905 49.4254 7.18523 49.5132 7.44783 49.4984C7.70312 49.484 7.99749 49.3694 8.31699 49.0496C8.98263 48.3832 9.68343 46.8962 10.1689 44.0523C10.2083 43.8216 10.3297 43.1986 10.5103 42.2727C11.283 38.3103 13.1375 28.8008 14.2664 20.7579C14.7872 17.0474 15.5159 13.825 16.1523 11.2025C16.2861 10.6512 16.4151 10.1289 16.5369 9.6357C16.9833 7.82832 17.3332 6.41175 17.4676 5.39298Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}

export default withEnable(Root46Left);
