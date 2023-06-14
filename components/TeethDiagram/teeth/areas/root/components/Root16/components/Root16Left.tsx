import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../../interfaces/props';
import { withEnable } from '../../../../../hoc/withEnable';
import { toothId } from '../../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../../zustand/teethDiagram';

function Root16Left({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View
      width='54.84%'
      aspectRatio={17 / 48}
      position='absolute'
      className={cx('left-[3.226%] -bottom-[11.54%]', customStyles)}
    >
      <svg
        width='100%'
        viewBox='0 0 17 48'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId['16']}
      >
        <path
          d='M16.4882 42.818L14.9149 43.6422C10.419 45.9976 5.52433 47.3071 0.542679 47.4906C0.683138 46.6914 0.998552 45.3387 1.37471 43.7256C1.57955 42.8471 1.8024 41.8914 2.02482 40.9058C2.69783 37.9234 3.36392 34.6767 3.4405 32.6787C3.5898 28.7833 3.5687 24.4994 3.52168 20.4774C3.51141 19.5986 3.49991 18.7326 3.48867 17.886C3.44837 14.8517 3.41137 12.0656 3.44601 9.82463C3.48378 7.38113 3.85245 5.30448 4.38868 3.73505C4.93364 2.1401 5.62234 1.15288 6.23483 0.770347C6.54618 0.575895 6.85037 0.486664 7.1356 0.501621C7.41416 0.516229 7.72442 0.632516 8.05343 0.939027C8.73656 1.57546 9.45659 2.99489 9.95629 5.71929C10.0429 6.19168 10.3712 8.5157 10.8294 11.7595C11.4649 16.2591 12.3505 22.5285 13.1878 28.0804C13.7236 31.6328 14.4724 34.719 15.1275 37.2325C15.2683 37.7728 15.4039 38.284 15.5319 38.7659C15.99 40.4922 16.3487 41.8438 16.4882 42.818ZM0.249254 47.5001C0.249391 47.5001 0.249516 47.5001 0.249653 47.5001L0.249254 47.5001Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}

export default withEnable(Root16Left);
