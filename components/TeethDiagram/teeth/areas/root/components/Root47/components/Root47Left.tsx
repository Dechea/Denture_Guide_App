import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../../interfaces/props';
import { withEnable } from '../../../../../hoc/withEnable';
import { toothId } from '../../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../../zustand/teethDiagram';

function Root47Left({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View
      width='58.06%'
      aspectRatio={18 / 44}
      position='absolute'
      className={cx('left-[3.225%] -top-[11.54%]', customStyles)}
    >
      <svg
        width='100%'
        viewBox='0 0 18 44'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId['47']}
      >
        <path
          d='M17.4608 4.79609L14.5632 3.51464C10.4447 1.69323 6.01579 0.673477 1.51489 0.509323C1.62822 1.24446 1.86721 2.4597 2.15099 3.90262C2.31038 4.7131 2.4839 5.59541 2.65721 6.50482C3.17879 9.24164 3.69625 12.215 3.77086 14.0412C3.91682 17.6141 3.89617 21.5426 3.85023 25.2297C3.84019 26.0357 3.82895 26.8297 3.81796 27.606C3.77859 30.3873 3.74246 32.9397 3.77629 34.9928C3.81309 37.2261 4.17223 39.1221 4.69343 40.5532C5.22291 42.0071 5.89037 42.9035 6.48374 43.2512C6.78698 43.4289 7.08682 43.5125 7.3709 43.4985C7.64895 43.4848 7.95272 43.376 8.27065 43.0981C8.9294 42.5223 9.62889 41.2343 10.1158 38.744C10.1559 38.5388 10.2792 37.9867 10.4622 37.1673C11.2424 33.6739 13.1082 25.3199 14.245 18.2482C14.7658 15.0091 15.4922 12.1927 16.1295 9.89574C16.272 9.38207 16.4092 8.89734 16.5381 8.44149C16.9756 6.89513 17.319 5.681 17.4608 4.79609ZM17.5437 4.83275C17.5439 4.83286 17.5441 4.83296 17.5444 4.83307L17.5437 4.83275Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}

export default withEnable(Root47Left);
