import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../../interfaces/props';
import { withEnable } from '../../../../../hoc/withEnable';
import { toothId } from '../../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../../zustand/teethDiagram';

function Root17Middle({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View
      width='41.94%'
      aspectRatio={13 / 46}
      position='absolute'
      className={cx('left-1/2 -translate-x-1/2 -bottom-[3.85%]', customStyles)}
    >
      <svg
        width='100%'
        viewBox='0 0 13 46'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId['17']}
      >
        <path
          d='M1.32263 45.2196L1.00378 45.2475C1.061 43.455 1.20548 36.9351 1.35985 29.9695C1.56568 20.6815 1.78907 10.6011 1.84654 9.87928C2.06668 7.11434 2.4022 4.72513 3.09346 3.03587C3.43684 2.19672 3.85478 1.56458 4.3589 1.14386C4.85301 0.731484 5.45575 0.500023 6.22387 0.5C7.21968 0.49997 7.92199 0.721613 8.44437 1.09847C8.9698 1.47752 9.36539 2.05117 9.67763 2.85002C9.99153 3.6531 10.2091 4.65231 10.3963 5.84637C10.5295 6.69594 10.6446 7.62366 10.7697 8.63268C10.8205 9.0427 10.873 9.46614 10.9291 9.90321C10.9454 10.0305 10.9733 10.614 11.0088 11.5957C11.0436 12.5594 11.0848 13.8731 11.1305 15.4275C11.2218 18.5362 11.3308 22.604 11.4415 26.7536L11.4603 27.461C11.6711 35.3601 11.8852 43.3885 11.9934 45.4833C8.45774 44.997 4.87835 44.9085 1.32263 45.2196ZM0.890475 45.2574C0.890601 45.2574 0.89072 45.2574 0.890846 45.2573L0.890475 45.2574Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}

export default withEnable(Root17Middle);
