import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../../interfaces/props';
import { withEnable } from '../../../../../hoc/withEnable';
import { toothId } from '../../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../../zustand/teethDiagram';

function Root36Right({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);
  return (
    <View
      width='54.84%'
      aspectRatio={17 / 50}
      position='absolute'
      className={cx('right-[3.225%] -top-[11.54%]', customStyles)}
    >
      <svg
        width='100%'
        viewBox='0 0 17 50'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId['36']}
      >
        <path
          d='M0.510378 5.5144L4.13227 3.75671C7.99438 1.88244 12.1865 0.782074 16.4712 0.516815C16.3848 1.34359 16.196 2.7651 15.9713 4.45797C15.849 5.37846 15.7162 6.37919 15.5833 7.40815C15.1753 10.5677 14.7685 13.9859 14.6917 16.0491C14.541 20.0954 14.5623 24.5455 14.6098 28.7242C14.6201 29.6371 14.6317 30.5367 14.6431 31.4162C14.6838 34.5689 14.7211 37.4642 14.6861 39.793C14.648 42.3347 14.2755 44.4958 13.7331 46.1299C13.1819 47.7907 12.4845 48.8207 11.8639 49.2197C11.5492 49.422 11.2436 49.5137 10.9585 49.4983C10.6804 49.4833 10.3676 49.3637 10.0339 49.0436C9.34048 48.3786 8.61213 46.8975 8.10727 44.0639C8.06622 43.8334 7.93961 43.2114 7.75148 42.2871C6.94684 38.3338 5.0168 28.8513 3.84169 20.8303C3.30184 17.1454 2.54754 13.9433 1.88714 11.3339C1.74442 10.77 1.60685 10.2364 1.47714 9.73321C1.01418 7.9374 0.651173 6.52932 0.510378 5.5144Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}

export default withEnable(Root36Right);
