import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../../interfaces/props';
import { withEnable } from '../../../../../hoc/withEnable';
import { toothId } from '../../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../../zustand/teethDiagram';

function Root38Left({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View
      width='54.84%'
      aspectRatio={17 / 39}
      position='absolute'
      className={cx('left-[3.225%] -top-[11.54%]', customStyles)}
    >
      <svg
        width='100%'
        viewBox='0 0 17 39'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId['38']}
      >
        <path
          d='M16.4876 4.301L13.3028 3.0817C9.22122 1.51905 4.90592 0.649101 0.536487 0.507484C0.637433 1.1619 0.833037 2.20158 1.06376 3.42791C1.20502 4.17876 1.35945 4.99958 1.51338 5.8448C1.95066 8.24588 2.38269 10.8389 2.45822 12.4394C2.60785 15.6102 2.58665 19.0956 2.53961 22.3639C2.52932 23.0791 2.5178 23.7835 2.50654 24.4719C2.46624 26.9368 2.42929 29.1964 2.46389 31.0139C2.50132 32.9805 2.86657 34.6471 3.39475 35.9026C3.92986 37.1746 4.60466 37.9629 5.2154 38.2727C5.83047 38.5847 6.4875 38.6087 7.11286 38.1355C7.77912 37.6314 8.48673 36.5072 8.98158 34.316C9.02324 34.1316 9.15054 33.6381 9.33928 32.9065C10.1399 29.8029 12.046 22.4142 13.2087 16.153C13.7354 13.3165 14.4671 10.8458 15.1133 8.82449C15.2705 8.3326 15.4214 7.871 15.5625 7.43929C15.995 6.11581 16.3356 5.07339 16.4876 4.301Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}

export default withEnable(Root38Left);
