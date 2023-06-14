import { View } from 'reshaped';
import { toothId } from '../../constants/toothArea';
import { useTeethDiagramStore } from '../../../../../zustand/teethDiagram';

interface ExtractionProps {
  tooth: number;
  customStyles?: string;
}

export const Extraction = ({ tooth, customStyles }: ExtractionProps) => {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View
      width='45.588%'
      aspectRatio={25 / 64}
      height='100%'
      justify={'end'}
      className={customStyles}
    >
      <svg
        width='100%'
        viewBox='0 0 25 65'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId[tooth as keyof typeof toothId]}
      >
        <path
          data-styleid='extraction-visualization'
          className='!stroke-none fill-[--rs-color-tooth-border-enabled]'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M20.7103 10.0108C21.1403 10.1258 21.3608 10.5563 21.2028 10.9725L13.5667 31.0807L21.9918 53.2665C22.1498 53.6827 21.9293 54.1132 21.4992 54.2281C21.0692 54.3431 20.5924 54.0989 20.4344 53.6828L12.709 33.3393L4.9835 53.6828C4.82546 54.0989 4.34872 54.3431 3.91867 54.2281C3.48862 54.1132 3.2681 53.6827 3.42614 53.2665L11.8512 31.0807L4.2151 10.9725C4.05706 10.5563 4.27758 10.1258 4.70763 10.0108C5.13768 9.89589 5.61442 10.1401 5.77246 10.5562L12.709 28.8221L19.6455 10.5562C19.8035 10.1401 20.2802 9.89589 20.7103 10.0108Z'
          onClick={onClick}
        />
      </svg>
    </View>
  );
};
