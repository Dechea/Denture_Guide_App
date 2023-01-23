'use client';

import { Tooth47 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import {
  Root47,
  Root47Left,
  Root47Right,
} from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView47 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { ImplantLowerJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.implant';
import {
  MissingRoot47,
  MissingRoot47Left,
  MissingRoot47Right,
} from '@dechea/hes.ui.foundations.teeth.visualizations.missing-root';
import { ArtificialCrown47 } from '@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown';
import { Prosthesis47 } from '@dechea/hes.ui.foundations.teeth.visualizations.prosthesis';
import { MissingCrown47 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-crown';

import { Container } from '../Container';

export const Tooth47 = () => {
  return (
    <Container>
      <Tooth>
        <Root47 enable={true}>
          <Root47Right enable={true} />
          <Root47Left enable={true} />
        </Root47>

        <ImplantLowerJaw enable={false} />

        <MissingRoot47 enable={false}>
          <MissingRoot47Right enable={false} />
          <MissingRoot47Left enable={false} />
        </MissingRoot47>

        <CrownSideView47 enable={true} />
        <ArtificialCrown47 enable={false} />
        <Prosthesis47 enable={false} />
        <MissingCrown47 enable={false} />
      </Tooth>
    </Container>
  );
};
