import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';
import { toothId } from '../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

function Root32({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);
  return (
    <View width='27.94%' insetTop={0} height='100%' className={customStyles}>
      <View
        width='89.474%'
        position='absolute'
        aspectRatio={17 / 38}
        className={cx('left-[5.263%] -top-[10.714%]', customStyles)}
      >
        <svg
          width='100%'
          viewBox='0 0 17 38'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          id={toothId[32]}
        >
          <path
            d='M1.34348 1.07419L1.03286 1.03316C1.12984 1.55972 1.29449 2.22943 1.48678 3.01154C1.60567 3.49516 1.73514 4.02174 1.8657 4.58403C2.22825 6.14537 2.586 7.93441 2.68558 9.66082C2.76453 11.0296 2.83754 12.4739 2.91247 13.9564C3.1509 18.6732 3.40885 23.7763 3.9399 28.0601C4.28917 30.8775 4.75229 33.2992 5.38956 35.0053C5.70864 35.8595 6.05887 36.4993 6.43324 36.918C6.79991 37.328 7.16334 37.5 7.53873 37.5C8.59682 37.5 9.51711 36.7226 10.3184 35.0639C11.111 33.423 11.7032 31.0781 12.1655 28.3086C12.8589 24.1551 13.2445 19.1566 13.6155 14.3479C13.739 12.747 13.8609 11.1673 13.9919 9.64667C14.1367 7.96734 14.5471 6.16764 14.964 4.52926C15.0826 4.0632 15.201 3.61248 15.3144 3.18119C15.5768 2.18252 15.8118 1.28799 15.9581 0.548233C11.1442 1.53942 6.21129 1.71715 1.34348 1.07419Z'
            onClick={onClick}
          />
        </svg>
      </View>

      {children}
    </View>
  );
}

export default withEnable(Root32);
