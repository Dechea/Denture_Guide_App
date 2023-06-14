import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../../interfaces/props';
import { withEnable } from '../../../../../hoc/withEnable';
import { toothId } from '../../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../../zustand/teethDiagram';

function Root26Left({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View
      width='58.065%'
      aspectRatio={18 / 48}
      position='absolute'
      className={cx('left-[3.226%] -bottom-[11.54%]', customStyles)}
    >
      <svg
        width='100%'
        viewBox='0 0 18 48'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId['26']}
      >
        <path
          d='M15.5653 39.5678C16.0152 41.1204 16.3674 42.3362 16.5111 43.2192L14.9609 43.963C10.4641 46.1208 5.56721 47.3218 0.581624 47.4911C0.726363 46.7565 1.034 45.5481 1.39995 44.1107C1.6051 43.3049 1.82858 42.427 2.05196 41.5204C2.72442 38.7909 3.39271 35.8095 3.46968 33.9701C3.61909 30.3996 3.59794 25.4642 3.55095 20.7739C3.54015 19.6958 3.52799 18.631 3.5162 17.5983C3.47658 14.1288 3.44112 11.0226 3.47525 9.00006C3.5129 6.76984 3.88025 4.8766 4.41327 3.44774C4.95438 1.99719 5.63708 1.10035 6.24751 0.75116C6.55966 0.572602 6.87059 0.487297 7.16708 0.501538C7.45776 0.5155 7.77236 0.626632 8.09899 0.905351C8.7741 1.48143 9.48923 2.76771 9.98712 5.25404C10.0342 5.48917 10.1694 6.57628 10.3721 8.26016C10.4253 8.70145 10.4828 9.18145 10.5443 9.69436C10.7148 11.1173 10.9157 12.7935 11.1373 14.5991C11.7401 19.5105 12.4977 25.3922 13.2182 29.7679C13.7547 33.0257 14.5043 35.8555 15.1596 38.1586C15.3011 38.6557 15.4371 39.1254 15.5653 39.5678Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}

export default withEnable(Root26Left);
