import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';
import { toothId } from '../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

function Root43({ children, customStyles }: RootProps) {
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
          id={toothId['43']}
        >
          <path
            d='M17.8057 1.28336L17.9591 1.25803C17.8362 1.91961 17.5932 2.79966 17.3075 3.83412C17.1608 4.36545 17.0029 4.93752 16.8441 5.54165C16.3453 7.44032 15.8562 9.6038 15.7857 11.5882C15.5072 19.4246 15.1078 29.7563 14.2428 38.1269C13.8099 42.3158 13.2627 45.9891 12.563 48.6062C12.2121 49.9187 11.8313 50.932 11.4265 51.6066C11.0081 52.3037 10.6522 52.5 10.3919 52.5C9.957 52.5 9.49225 52.2499 8.99795 51.6065C8.50415 50.9639 8.03665 49.9963 7.60178 48.7334C6.73391 46.2129 6.04065 42.6518 5.47712 38.5301C4.35112 30.2946 3.75787 19.9408 3.28121 11.4725C3.1721 9.53407 2.68282 7.36469 2.1854 5.37915C2.07271 4.92931 1.96003 4.49033 1.851 4.06555C1.50618 2.72213 1.19782 1.52079 1.04073 0.567448C6.52912 1.96099 12.2258 2.2047 17.8057 1.28336ZM18.2197 1.21499C18.2195 1.21503 18.2193 1.21507 18.219 1.21511L18.2197 1.21499Z'
            onClick={onClick}
          />
        </svg>
      </View>

      {children}
    </View>
  );
}

export default withEnable(Root43);
