import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../../interfaces/props';
import { withEnable } from '../../../../../hoc/withEnable';
import { toothId } from '../../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../../zustand/teethDiagram';

function Root27Right({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View
      width='58.065%'
      aspectRatio={18 / 44}
      position='absolute'
      className={cx('right-[3.226%] -bottom-[11.54%]', customStyles)}
    >
      <svg
        width='100%'
        viewBox='0 0 18 44'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId['27']}
      >
        <path
          d='M1.45963 39.2157L3.01088 39.9606C7.50687 42.1198 12.4036 43.3217 17.3891 43.4911C17.2444 42.7559 16.9367 41.5463 16.5707 40.1074C16.3656 39.3011 16.1421 38.4228 15.9188 37.5156C15.2463 34.7837 14.5779 31.7997 14.501 29.9588C14.3516 26.3857 14.3727 22.4569 14.4197 18.7699C14.43 17.9639 14.4415 17.1698 14.4528 16.3935C14.4931 13.6122 14.53 11.0601 14.4954 9.00726C14.4578 6.77517 14.0904 4.88033 13.5574 3.45024C13.0162 1.99843 12.3335 1.10081 11.723 0.751327C11.4109 0.572633 11.1 0.487291 10.8036 0.501539C10.5131 0.515507 10.1985 0.626686 9.87186 0.905642C9.19668 1.48224 8.48151 2.76968 7.9836 5.25809C7.89713 5.69024 7.56946 7.81683 7.11191 10.7863C6.47652 14.91 5.59067 20.6592 4.75252 25.7532C4.21605 29.0137 3.46634 31.8459 2.81104 34.1509C2.66965 34.6483 2.5336 35.1182 2.40548 35.5607C1.95554 37.1149 1.60321 38.3319 1.45963 39.2157Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}

export default withEnable(Root27Right);
