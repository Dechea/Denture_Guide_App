import { LowerRoot } from './components/LowerRoot';
import { UpperRoot } from './components/UpperRoot';
import { MappedRootProps } from './interfaces/props';
import { rootMap } from './rootMapping';

export const MappedRoot = ({ tooth, customStyles }: MappedRootProps) => {
  const Root = rootMap[tooth as keyof typeof rootMap];

  if (tooth < 30) {
    return (
      <UpperRoot customStyles={customStyles}>
        <Root tooth={tooth} />
      </UpperRoot>
    );
  }

  return (
    <LowerRoot customStyles={customStyles}>
      <Root tooth={tooth} />
    </LowerRoot>
  );
};
