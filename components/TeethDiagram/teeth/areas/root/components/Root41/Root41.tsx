import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';
import { toothId } from '../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

function Root41({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View insetTop={0} height='100%' className={customStyles} width='27.94%'>
      <View
        width='89.47368421%'
        aspectRatio={17 / 40}
        position='absolute'
        className={cx('left-[5.26%] -top-[10.345%]', customStyles)}
      >
        <svg
          width='100%'
          viewBox='0 0 17 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          id={toothId['41']}
        >
          <path
            d='M14.7454 1.18036L15.9745 1.02696C15.8978 1.48957 15.7762 2.03705 15.6345 2.67516C15.5424 3.08982 15.4418 3.54275 15.3395 4.03553C15.0651 5.35723 14.7921 6.91037 14.6882 8.611C14.6318 9.53584 14.5751 10.5158 14.516 11.536C14.2106 16.8151 13.8428 23.1701 13.1252 28.527C12.6967 31.7263 12.1474 34.5347 11.4254 36.5325C11.0637 37.5334 10.6705 38.2964 10.2524 38.8007C9.83811 39.3004 9.44122 39.5 9.05401 39.5C7.96544 39.5 7.05895 38.5994 6.32809 36.6295C5.61199 34.6994 5.15693 31.9689 4.84295 28.813C4.52982 25.6656 4.36051 22.1375 4.20024 18.6278C4.19178 18.4424 4.18334 18.2571 4.1749 18.0719C4.02392 14.7568 3.87454 11.4767 3.61176 8.59605C3.4556 6.8842 2.90154 5.28506 2.34306 3.87817C2.19759 3.51173 2.0537 3.16216 1.91625 2.82824C1.56708 1.97998 1.25946 1.23264 1.0731 0.565903C5.56925 1.54176 10.1854 1.74948 14.7454 1.18036Z'
            onClick={onClick}
          />
        </svg>
      </View>

      {children}
    </View>
  );
}

export default withEnable(Root41);
