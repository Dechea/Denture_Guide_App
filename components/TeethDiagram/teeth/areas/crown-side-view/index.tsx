import cx from 'classnames';
import { UpperCrown } from './components/UpperCrown';
import { LowerCrown } from './components/LowerCrown';
import { CrownProps } from './interfaces/props';
import { AnchorLeft, AnchorRight } from '../../visualizations/anchor';
import { crownMapping } from './crownMapping';
import {
  ADULT,
  ARTIFICIAL_CROWN,
  PROSTHESIS,
  BRIDGE_LINK,
  PROSTHESIS_LINK,
  BRIDGE_ANCHOR,
  PROSTHESIS_ANCHOR,
  EXTRACTION,
} from '../../constants/treatmentVariants';

const crownStyling = {
  [ADULT]:
    '[&_svg>*]:stroke-[--rs-color-tooth-border-enabled] [&_svg>*]:fill-[--rs-color-tooth-background-enabled]',
  [ARTIFICIAL_CROWN]:
    '[&_svg>*]:stroke-[--rs-color-metallic-border] [&_svg>*]:fill-[--rs-color-metallic-background]',
  [PROSTHESIS]:
    '[&_svg>*]:stroke-[--rs-color-removable-border] [&_svg>*]:fill-[--rs-color-removable-background]',
  [BRIDGE_LINK]:
    '[&_svg>*]:stroke-[--rs-color-metallic-border] [&_svg>*]:fill-[--rs-color-metallic-background]',
  [PROSTHESIS_LINK]:
    '[&_svg>*]:stroke-[--rs-color-removable-border] [&_svg>*]:fill-[--rs-color-removable-background]',
  [BRIDGE_ANCHOR]:
    '[&_svg>*]:stroke-[--rs-color-metallic-border] [&_svg>*]:fill-[--rs-color-metallic-background]',
  [PROSTHESIS_ANCHOR]:
    '[&_svg>*]:stroke-[--rs-color-removable-border] [&_svg>*]:fill-[--rs-color-removable-background]',
  [EXTRACTION]:
    '[&_svg>*]:opacity-0 [&_svg>*]:stroke-[--rs-color-missing-border-enabled] [&_svg>*]:fill-[--rs-color-missing-background-enabled]',
};

const Crown = ({
  children,
  tooth,
  variant = 'adult',
  leftAnchor = false,
  rightAnchor = false,
  customStyles,
}: CrownProps) => {
  const Component = crownMapping[tooth as keyof typeof crownMapping];

  const Container = tooth < 30 ? UpperCrown : LowerCrown;

  return (
    <Container
      customStyles={cx(
        crownStyling[variant as keyof typeof crownStyling],
        customStyles
      )}
    >
      {leftAnchor && <AnchorLeft tooth={tooth} />}
      {rightAnchor && <AnchorRight tooth={tooth} />}
      <Component customStyles={customStyles}/>

      {children}
    </Container>
  );
};

export default Crown;
