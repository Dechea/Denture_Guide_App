import { Anchor } from './components/Anchor';
import { AnchorLeftUpper } from './components/AnchorLeftUpper';
import { AnchorRightUpper } from './components/AnchorRightUpper';
import { AnchorLeftLower } from './components/AnchorLeftLower';
import { AnchorRightLower } from './components/AnchorRightLower';
import { AnchorProps } from './interfaces/props';

export {
  Anchor,
  AnchorLeftLower,
  AnchorLeftUpper,
  AnchorRightLower,
  AnchorRightUpper,
};

const AnchorLeft = ({ tooth, customStyles }: AnchorProps) => {
  if (tooth < 30) {
    return <AnchorLeftUpper customStyles={customStyles} tooth={tooth} />;
  } else {
    return <AnchorLeftLower customStyles={customStyles} tooth={tooth} />;
  }
};

const AnchorRight = ({ tooth, customStyles }: AnchorProps) => {
  if (tooth < 30) {
    return <AnchorRightUpper customStyles={customStyles} tooth={tooth} />;
  } else {
    return <AnchorRightLower customStyles={customStyles} tooth={tooth} />;
  }
};

export { AnchorLeft, AnchorRight };
