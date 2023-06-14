import ToothComponent from './components/Tooth';
import ToothNumber from './components/ToothNumber';
import ToothContainer from './components/ToothContainer';
import { Extraction } from '../../visualizations/extraction';
import { Tooth } from './interfaces/props';
import { ADULT, EXTRACTION } from '../../constants/treatmentVariants';

const Tooth = ({ children, tooth, variant = ADULT, className }: Tooth) => {
  const isExtractionVariant = variant === EXTRACTION;

  return (
    <ToothComponent tooth={tooth} customStyles={className}>
      {isExtractionVariant && <Extraction tooth={tooth} />}

      {!isExtractionVariant && children}
    </ToothComponent>
  );
};

export { Tooth, ToothContainer, ToothNumber };
