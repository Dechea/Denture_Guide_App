import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../../interfaces/props';
import { withEnable } from '../../../../../hoc/withEnable';
import { toothId } from '../../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../../zustand/teethDiagram';

function Root47Right({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View
      width='58.06%'
      aspectRatio={18 / 44}
      position='absolute'
      className={cx('right-[3.225%] -top-[11.54%]', customStyles)}
    >
      <svg
        width='100%'
        viewBox='0 0 18 44'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId['47']}
      >
        <path
          d='M0.536274 4.7986L3.82596 3.37605C7.83218 1.64366 12.1267 0.671753 16.489 0.509342C16.3917 1.24213 16.1898 2.45463 15.9502 3.89294C15.8141 4.71019 15.6658 5.60035 15.5177 6.51683C15.0751 9.25599 14.6354 12.2227 14.5595 14.0406C14.4102 17.6138 14.4313 21.5427 14.4783 25.2297C14.4886 26.0358 14.5001 26.8299 14.5113 27.6062C14.5516 30.3875 14.5885 32.9397 14.5539 34.9926C14.5163 37.2247 14.1492 39.1197 13.6165 40.5498C13.0757 42.0017 12.3934 42.8993 11.7835 43.2487C11.4717 43.4274 11.1611 43.5127 10.8651 43.4985C10.5749 43.4845 10.2607 43.3734 9.93435 43.0945C9.25969 42.5179 8.545 41.2304 8.04742 38.7419C8.00634 38.5364 7.88018 37.9841 7.69289 37.1641C6.89482 33.6701 4.98697 25.3174 3.82437 18.2464C3.29282 15.0134 2.55179 12.2016 1.90094 9.90723C1.7536 9.38785 1.61189 8.89805 1.47872 8.43773C1.03228 6.89466 0.681688 5.68285 0.536274 4.7986Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}

export default withEnable(Root47Right);
