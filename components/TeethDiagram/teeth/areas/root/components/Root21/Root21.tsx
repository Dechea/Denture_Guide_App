import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';
import { toothId } from '../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

function Root21({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View
      width='35.294%'
      insetBottom={0}
      height='100%'
      className={customStyles}
    >
      <View
        width='91.66%'
        position='absolute'
        aspectRatio={22 / 45}
        className={cx('-bottom-[12%]', customStyles)}
      >
        <svg
          width='100%'
          viewBox='0 0 22 45'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          id={toothId[21]}
        >
          <path
            d='M20.3236 43.8197L20.9853 43.8984C20.8777 43.4907 20.7043 43.0085 20.4905 42.4426C20.4383 42.3044 20.3838 42.1616 20.3277 42.0145C20.1466 41.5397 19.9485 41.0204 19.7555 40.4702C19.2484 39.0244 18.7605 37.3224 18.6436 35.4513C18.5215 33.4962 18.4154 31.3692 18.3051 29.1603C18.0341 23.7306 17.7384 17.8059 17.1205 12.7213C16.6858 9.14403 16.0962 6.02807 15.2608 3.81785C14.8427 2.71184 14.3758 1.8676 13.8634 1.30713C13.3595 0.755885 12.8338 0.500023 12.2656 0.5C10.7453 0.499939 9.49374 1.58845 8.44861 3.73069C7.40982 5.85991 6.65594 8.87994 6.07885 12.3967C5.28235 17.2507 4.83662 22.9462 4.41091 28.3861C4.21954 30.8315 4.03222 33.2252 3.81889 35.4675C3.64363 37.3097 3.06891 39.0327 2.4784 40.5634C2.30714 41.0074 2.1367 41.4306 1.97393 41.8347C1.57509 42.825 1.22232 43.7009 1.01641 44.4877C7.38541 43.2803 13.8911 43.0551 20.3236 43.8197Z'
            onClick={onClick}
          />
        </svg>
      </View>

      {children}
    </View>
  );
}

export default withEnable(Root21);
