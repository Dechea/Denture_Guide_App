import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';
import { toothId } from '../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

function Root35({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);
  return (
    <View width='30.88%' insetTop={0} height='100%' className={customStyles}>
      <View
        width='90.476%'
        position='absolute'
        aspectRatio={19 / 49}
        className={cx('left-[4.76%] -top-[11.11%]', customStyles)}
      >
        <svg
          width='100%'
          viewBox='0 0 19 49'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          id={toothId[35]}
        >
          <path
            d='M1.25969 1.23687L1.05534 1.20558C1.14758 1.60515 1.29525 2.10474 1.47853 2.68831C1.56436 2.9616 1.65821 3.25396 1.75634 3.55967C1.91455 4.05254 2.08389 4.58009 2.2487 5.11827C2.78393 6.86604 3.31084 8.84745 3.38267 10.5872C3.41431 11.3534 3.4462 12.1456 3.47895 12.9588C3.75611 19.8424 4.09408 28.2362 4.84918 35.182C5.27172 39.0687 5.822 42.4718 6.55529 44.8933C6.92293 46.1073 7.32637 47.0391 7.75975 47.6574C8.19557 48.2792 8.59813 48.5 8.96039 48.5C9.50423 48.5 10.0162 48.2433 10.5144 47.6697C11.0203 47.0874 11.4829 46.208 11.8985 45.0517C12.7287 42.7418 13.3223 39.4703 13.7707 35.6677C14.3896 30.42 14.7237 24.2462 15.044 18.329C15.1878 15.6718 15.3288 13.0664 15.4915 10.6198C15.605 8.91354 16.1452 6.88619 16.6922 5.02309C16.8184 4.59324 16.9445 4.17332 17.0664 3.76744C17.4379 2.53088 17.7702 1.42463 17.946 0.564808C12.4804 1.85888 6.81416 2.08744 1.25969 1.23687Z'
            onClick={onClick}
          />
        </svg>
      </View>

      {children}
    </View>
  );
}

export default withEnable(Root35);
