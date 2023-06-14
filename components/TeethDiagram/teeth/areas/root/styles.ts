import {
  ADULT,
  IMPLANT,
  MISSING_ROOT,
  EXTRACTION,
} from '../../constants/treatmentVariants';

export const rootStylesByVariant = {
  [ADULT]:
    '[&_svg>*]:stroke-[--rs-color-tooth-border-enabled] [&_svg>*]:fill-[--rs-color-tooth-background-enabled]',
  [IMPLANT]: '[&_svg>*]:fill-[--rs-color-metallic-background]',
  [MISSING_ROOT]:
    '[&_svg>*]:opacity-0 [&_svg>*]:fill-[--rs-color-missing-background-enabled] [&_svg>*]:stroke-[--rs-color-missing-border-enabled]',
  [EXTRACTION]:
    '[&_svg>*]:opacity-0 [&_svg>*]:fill-[--rs-color-missing-background-enabled] [&_svg>*]:stroke-[--rs-color-missing-border-enabled]',
};
