import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../../interfaces/props';
import { withEnable } from '../../../../../hoc/withEnable';
import { toothId } from '../../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../../zustand/teethDiagram';

function Root37Right({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View
      width='54.84%'
      aspectRatio={17 / 44}
      position='absolute'
      className={cx('right-[3.225%] -top-[11.54%]', customStyles)}
    >
      <svg
        width='100%'
        viewBox='0 0 17 44'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId['37']}
      >
        <path
          d='M0.512836 4.7986L3.80253 3.37605C7.80875 1.64366 12.1033 0.671753 16.4656 0.509342C16.3683 1.24213 16.1664 2.45463 15.9268 3.89294C15.7907 4.71019 15.6424 5.60035 15.4943 6.51683C15.0516 9.25599 14.612 12.2227 14.536 14.0406C14.3867 17.6138 14.4079 21.5427 14.4548 25.2297C14.4651 26.0358 14.4766 26.8299 14.4879 27.6062C14.5281 30.3875 14.5651 32.9397 14.5305 34.9926C14.4929 37.2247 14.1257 39.1197 13.5931 40.5498C13.0523 42.0017 12.37 42.8993 11.7601 43.2487C11.4482 43.4274 11.1377 43.5127 10.8417 43.4985C10.5515 43.4845 10.2373 43.3734 9.91092 43.0945C9.23625 42.5179 8.52156 41.2304 8.02399 38.7419C7.98291 38.5364 7.85674 37.9841 7.66946 37.1641C6.87139 33.6701 4.96353 25.3174 3.80093 18.2464C3.26939 15.0134 2.52835 12.2016 1.8775 9.90723C1.73016 9.38785 1.58846 8.89805 1.45528 8.43773C1.00885 6.89466 0.658251 5.68285 0.512836 4.7986Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}

export default withEnable(Root37Right);
