import { ImplantLowerJaw } from './components/ImplantLowerJaw';
import { ImplantUpperJaw } from './components/ImplantUpperJaw';

export { ImplantLowerJaw, ImplantUpperJaw };

interface ComposedImplantProps {
  tooth: number;
  customStyles: string;
}

export const ComposedImplant = ({
  tooth,
  customStyles,
}: ComposedImplantProps) => {
  if (tooth < 30) {
    return (
      <ImplantUpperJaw
        tooth={tooth}
        customStyles={customStyles}
      />
    );
  }

  return (
    <ImplantLowerJaw
      tooth={tooth}
      customStyles={customStyles}
    />
  );
};
