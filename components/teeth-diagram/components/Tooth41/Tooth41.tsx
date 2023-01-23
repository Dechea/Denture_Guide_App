'use client';

import { Tooth41 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root41 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView41 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { ImplantLowerJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.implant';
import { MissingRoot41 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-root';
import { ArtificialCrown41 } from '@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown';
import { Prosthesis41 } from '@dechea/hes.ui.foundations.teeth.visualizations.prosthesis';
import { MissingCrown41 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-crown';

import { Container } from '../Container';

export const Tooth41 = () => {
  return (
    <Container>
      <Tooth>
        <Root41 enable={true} />
        <ImplantLowerJaw enable={false} />
        <MissingRoot41 enable={false} />
        <CrownSideView41 enable={true} />
        <ArtificialCrown41 enable={false} />
        <Prosthesis41 enable={false} />
        <MissingCrown41 enable={false} />
      </Tooth>
    </Container>
  );
};
