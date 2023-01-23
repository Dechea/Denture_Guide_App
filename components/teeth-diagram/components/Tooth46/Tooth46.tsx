'use client';

import { Tooth46 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import {
  Root46,
  Root46Left,
  Root46Right,
} from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView46 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { ImplantLowerJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.implant';
import {
  MissingRoot46,
  MissingRoot46Left,
  MissingRoot46Right,
} from '@dechea/hes.ui.foundations.teeth.visualizations.missing-root';
import { ArtificialCrown46 } from '@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown';
import { Prosthesis46 } from '@dechea/hes.ui.foundations.teeth.visualizations.prosthesis';
import { MissingCrown46 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-crown';

import { Container } from '../Container';

export const Tooth46 = () => {
  return (
    <Container>
      <Tooth>
        <Root46 enable={true}>
          <Root46Right enable={true} />
          <Root46Left enable={true} />
        </Root46>

        <ImplantLowerJaw enable={false} />

        <MissingRoot46 enable={false}>
          <MissingRoot46Right enable={false} />
          <MissingRoot46Left enable={false} />
        </MissingRoot46>

        <CrownSideView46 enable={true} />
        <ArtificialCrown46 enable={false} />
        <Prosthesis46 enable={false} />
        <MissingCrown46 enable={false} />
      </Tooth>
    </Container>
  );
};
