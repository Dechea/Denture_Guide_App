import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../../interfaces/props';
import { withEnable } from '../../../../../hoc/withEnable';
import { toothId } from '../../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../../zustand/teethDiagram';

function Root36Left({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);
  return (
    <View
      width='54.84%'
      aspectRatio={17 / 50}
      position='absolute'
      className={cx('left-[3.225%] -top-[11.54%]', customStyles)}
    >
      <svg
        width='100%'
        viewBox='0 0 17 50'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId['36']}
      >
        <path
          d='M16.4871 5.39298L13.5564 3.90849C9.50973 1.85876 5.07001 0.700764 0.538036 0.511448C0.650841 1.33856 0.909004 2.76444 1.21719 4.46661C1.37832 5.35655 1.55312 6.32201 1.72797 7.3169C2.27959 10.4556 2.82889 13.8747 2.90334 15.962C3.07905 20.888 3.01059 26.4567 2.94986 31.3969C2.91105 34.5543 2.87539 37.455 2.90866 39.7669C2.94535 42.3172 3.30344 44.4859 3.82502 46.1262C4.35566 47.795 5.02662 48.8268 5.61874 49.2241C5.91858 49.4254 6.20477 49.5132 6.46736 49.4984C6.72265 49.484 7.01702 49.3694 7.33652 49.0496C8.00216 48.3832 8.70296 46.8962 9.18841 44.0523C9.22778 43.8216 9.34928 43.1986 9.52984 42.2727C10.3025 38.3103 12.157 28.8008 13.2859 20.7579C13.8067 17.0474 14.5354 13.825 15.1719 11.2025C15.3056 10.6512 15.4346 10.1289 15.5565 9.6357C16.0029 7.82832 16.3528 6.41175 16.4871 5.39298Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}

export default withEnable(Root36Left);
