import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';
import { toothId } from '../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

function Root33({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);
  return (
    <View width='30.88%' insetTop={0} height='100%' className={customStyles}>
      <View
        width='90.476%'
        position='absolute'
        aspectRatio={19 / 53}
        className={cx('left-[4.76%] -top-[11.54%]', customStyles)}
      >
        <svg
          width='100%'
          viewBox='0 0 19 53'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          id={toothId[33]}
        >
          <path
            d='M1.19432 1.28336L1.04094 1.25803C1.16379 1.91962 1.4068 2.79966 1.69245 3.83412C1.83917 4.36546 1.99714 4.93752 2.15586 5.54165C2.65466 7.44032 3.14383 9.6038 3.21435 11.5882C3.4928 19.4246 3.89223 29.7563 4.75722 38.1269C5.19009 42.3158 5.73727 45.9891 6.43699 48.6062C6.78791 49.9187 7.1687 50.932 7.57352 51.6066C7.99187 52.3037 8.34782 52.5 8.60809 52.5C9.043 52.5 9.50775 52.2499 10.002 51.6065C10.4958 50.9639 10.9634 49.9963 11.3982 48.7334C12.2661 46.2129 12.9593 42.6518 13.5229 38.5301C14.6489 30.2946 15.2421 19.9408 15.7188 11.4725C15.8279 9.53407 16.3172 7.36469 16.8146 5.37915C16.9273 4.92933 17.04 4.49036 17.149 4.0656C17.4938 2.72216 17.8022 1.5208 17.9593 0.567444C12.4709 1.96099 6.7742 2.2047 1.19432 1.28336Z'
            onClick={onClick}
          />
        </svg>
      </View>

      {children}
    </View>
  );
}

export default withEnable(Root33);
