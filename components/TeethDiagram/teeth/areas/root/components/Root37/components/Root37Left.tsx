import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../../interfaces/props';
import { withEnable } from '../../../../../hoc/withEnable';
import { toothId } from '../../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../../zustand/teethDiagram';

function Root37Left({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View
      width='54.84%'
      aspectRatio={17 / 44}
      position='absolute'
      className={cx('left-[3.225%] -top-[11.54%]', customStyles)}
    >
      <svg
        width='100%'
        viewBox='0 0 17 44'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId['37']}
      >
        <path
          d='M16.4862 4.79609L13.5886 3.51464C9.47011 1.69323 5.04118 0.673477 0.540284 0.509323C0.653606 1.24446 0.892604 2.4597 1.17638 3.90262C1.33577 4.7131 1.50929 5.59541 1.6826 6.50482C2.20418 9.24164 2.72164 12.215 2.79625 14.0412C2.94221 17.6141 2.92156 21.5426 2.87562 25.2297C2.86558 26.0357 2.85434 26.8297 2.84335 27.606C2.80398 30.3873 2.76785 32.9397 2.80168 34.9928C2.83848 37.2261 3.19762 39.1221 3.71882 40.5532C4.2483 42.0071 4.91577 42.9035 5.50913 43.2512C5.81237 43.4289 6.11221 43.5125 6.39629 43.4985C6.67434 43.4848 6.97811 43.376 7.29604 43.0981C7.95479 42.5223 8.65428 41.2343 9.14115 38.744C9.18128 38.5388 9.30456 37.9867 9.48758 37.1673C10.2678 33.6739 12.1336 25.3199 13.2704 18.2482C13.7912 15.0091 14.5176 12.1927 15.1549 9.89574C15.2974 9.38207 15.4345 8.89734 15.5635 8.44149C16.0009 6.89513 16.3444 5.681 16.4862 4.79609ZM16.5691 4.83275C16.5693 4.83286 16.5695 4.83296 16.5698 4.83307L16.5691 4.83275Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}

export default withEnable(Root37Left);
