'use client';

import { Tooth48 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import {
  Root48,
  Root48Left,
  Root48Right,
} from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView48 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { ImplantLowerJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.implant';
import {
  MissingRoot48,
  MissingRoot48Left,
  MissingRoot48Right,
} from '@dechea/hes.ui.foundations.teeth.visualizations.missing-root';
import { ArtificialCrown48 } from '@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown';
import { Prosthesis48 } from '@dechea/hes.ui.foundations.teeth.visualizations.prosthesis';
import { MissingCrown48 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-crown';

import { Container } from '../Container';

export const Tooth48 = () => {
  return (
    <Container>
      <Tooth>
        <Root48 enable={true}>
          <Root48Right enable={true} />
          <Root48Left enable={true} />
        </Root48>

        <ImplantLowerJaw enable={false} />

        <MissingRoot48 enable={false}>
          <MissingRoot48Right enable={false} />
          <MissingRoot48Left enable={false} />
        </MissingRoot48>

        <CrownSideView48 enable={true} />
        <ArtificialCrown48 enable={false} />
        <Prosthesis48 enable={false} />
        <MissingCrown48 enable={false} />
      </Tooth>
    </Container>
  );
};
