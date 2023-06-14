import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../../interfaces/props';
import { withEnable } from '../../../../../hoc/withEnable';
import { toothId } from '../../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../../zustand/teethDiagram';

function Root16Right({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View
      width='54.84%'
      aspectRatio={17 / 48}
      position='absolute'
      className={cx('right-[3.226%] -bottom-[12%]', customStyles)}
    >
      <svg
        width='100%'
        viewBox='0 0 17 48'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId['16']}
      >
        <path
          d='M0.511778 42.818L2.08505 43.6422C6.58098 45.9976 11.4757 47.3071 16.4573 47.4906C16.3169 46.6914 16.0014 45.3387 15.6253 43.7256C15.4205 42.8471 15.1976 41.8914 14.9752 40.9058C14.3022 37.9234 13.6361 34.6767 13.5595 32.6787C13.4102 28.7833 13.4313 24.4994 13.4783 20.4774C13.4886 19.5986 13.5001 18.7326 13.5113 17.886C13.5516 14.8517 13.5886 12.0656 13.554 9.82463C13.5162 7.38113 13.1476 5.30448 12.6113 3.73505C12.0664 2.1401 11.3777 1.15288 10.7652 0.770347C10.4538 0.575895 10.1496 0.486664 9.8644 0.501621C9.58584 0.516229 9.27558 0.632516 8.94657 0.939027C8.26344 1.57546 7.54341 2.99489 7.04371 5.71929C6.95706 6.19168 6.6288 8.5157 6.17062 11.7595C5.53506 16.2591 4.64953 22.5285 3.81216 28.0804C3.27638 31.6328 2.52755 34.719 1.87253 37.2325C1.73172 37.7728 1.59606 38.284 1.46814 38.7659C1.01 40.4922 0.651297 41.8438 0.511778 42.818ZM16.7507 47.5001C16.7506 47.5001 16.7505 47.5001 16.7503 47.5001L16.7507 47.5001Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}

export default withEnable(Root16Right);
