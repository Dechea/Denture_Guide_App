import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../../interfaces/props';
import { withEnable } from '../../../../../hoc/withEnable';
import { toothId } from '../../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../../zustand/teethDiagram';

function Root26Middle({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View
      width='41.94%'
      aspectRatio={13 / 50}
      position='absolute'
      className={cx('left-1/2 -translate-x-1/2 -bottom-[3.85%]', customStyles)}
    >
      <svg
        width='100%'
        viewBox='0 0 13 50'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId['26']}
      >
        <path
          d='M1.31939 49.1987L1.00262 49.2285C1.05927 47.348 1.20604 40.1198 1.36251 32.4136C1.56764 22.3115 1.78944 11.3882 1.84675 10.6145C2.06692 7.64182 2.40292 5.06387 3.09799 3.23787C3.44394 2.32904 3.86539 1.64404 4.37242 1.18915C4.86769 0.744812 5.46587 0.500024 6.22387 0.5C7.21221 0.499968 7.90926 0.735827 8.43049 1.14006C8.95816 1.54928 9.35803 2.17152 9.67342 3.03895C10.2237 4.55234 10.4657 6.64699 10.7691 9.27232C10.82 9.71232 10.8725 10.1672 10.9286 10.6368C10.9454 10.7777 10.9734 11.4179 11.0087 12.4861C11.0436 13.5375 11.0848 14.9713 11.1304 16.6682C11.2218 20.0617 11.3307 24.5034 11.4414 29.033L11.4587 29.7373C11.6713 38.436 11.8876 47.2883 11.9953 49.482C8.458 48.9592 4.87686 48.8641 1.31939 49.1987ZM0.887235 49.2393C0.887364 49.2393 0.887486 49.2393 0.887614 49.2393L0.887235 49.2393Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}

export default withEnable(Root26Middle);
