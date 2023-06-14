import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../../interfaces/props';
import { withEnable } from '../../../../../hoc/withEnable';
import { toothId } from '../../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../../zustand/teethDiagram';

function Root26Right({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View
      width='58.065%'
      aspectRatio={18 / 48}
      position='absolute'
      className={cx('right-[3.226%] -bottom-[11.54%]', customStyles)}
    >
      <svg
        width='100%'
        viewBox='0 0 18 48'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId['26']}
      >
        <path
          d='M1.48894 43.219L3.03918 43.9629C7.53587 46.1207 12.4328 47.3218 17.4184 47.4911C17.2736 46.7565 16.966 45.548 16.6 44.1105C16.3949 43.3047 16.1714 42.4269 15.948 41.5202C15.2756 38.7906 14.6073 35.8091 14.5303 33.9697C14.3809 30.399 14.4021 25.4639 14.4491 20.7738C14.4599 19.6958 14.472 18.631 14.4838 17.5984C14.5234 14.1291 14.5589 11.023 14.5247 9.00035C14.4871 6.77005 14.1198 4.87675 13.5867 3.44784C13.0456 1.99724 12.3629 1.10037 11.7525 0.751167C11.4403 0.572603 11.1294 0.487297 10.8329 0.501538C10.5422 0.5155 10.2276 0.626634 9.90102 0.905363C9.2259 1.48146 8.51077 2.76779 8.01287 5.2542C7.96579 5.48935 7.83064 6.5764 7.62788 8.26019C7.57475 8.7014 7.51723 9.18131 7.45576 9.69412C7.2852 11.117 7.08428 12.7932 6.86265 14.5988C6.25985 19.51 5.50233 25.3915 4.78179 29.7674C4.24533 33.0252 3.49566 35.8551 2.84037 38.1583C2.69894 38.6554 2.56286 39.1251 2.4347 39.5675C1.98484 41.1201 1.63257 42.336 1.48894 43.219Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}

export default withEnable(Root26Right);
