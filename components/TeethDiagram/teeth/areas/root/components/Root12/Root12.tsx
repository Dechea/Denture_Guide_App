import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';
import { toothId } from '../../../../constants/toothArea';
import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

function Root12({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View width='27.94%' insetBottom={0} height='100%' className={customStyles}>
      <View
        width='100%'
        position='absolute'
        aspectRatio={19 / 38}
        className={cx('-bottom-[10.71%]', customStyles)}
      >
        <svg
          width='100%'
          viewBox='0 0 19 38'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          id={toothId[12]}
        >
          <path
            d='M1.50005 36.9255L1.02279 36.9815C1.11834 36.4514 1.27838 35.7781 1.46496 34.9931C1.58279 34.4973 1.7112 33.957 1.84063 33.3802C2.18755 31.8341 2.53009 30.0694 2.64085 28.3635C2.70719 27.3416 2.77183 26.2773 2.8381 25.1863C3.14285 20.1691 3.48193 14.5867 4.17847 9.96264C4.60293 7.14487 5.15462 4.72521 5.89315 3.02165C6.64954 1.2769 7.50124 0.500037 8.42056 0.5C9.68108 0.49995 10.7342 1.32137 11.6355 2.96186C12.5358 4.60048 13.2149 6.9427 13.7487 9.71173C14.5712 13.9786 15.0286 19.1385 15.4656 24.0684C15.5956 25.5344 15.7237 26.9801 15.8591 28.3759C16.0209 30.0431 16.4529 31.8253 16.8928 33.4501C17.0253 33.9395 17.1577 34.4121 17.2841 34.8632C17.5609 35.8515 17.809 36.7369 17.9662 37.4715C12.5368 36.466 6.9854 36.2818 1.50005 36.9255Z'
            onClick={onClick}
          />
        </svg>
      </View>

      {children}
    </View>
  );
}

export default withEnable(Root12);
