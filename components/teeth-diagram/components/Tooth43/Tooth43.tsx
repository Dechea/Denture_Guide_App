'use client';

import { Tooth43 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root43 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView43 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { ImplantLowerJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.implant';
import { MissingRoot43 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-root';
import { ArtificialCrown43 } from '@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown';
import { Prosthesis43 } from '@dechea/hes.ui.foundations.teeth.visualizations.prosthesis';
import { MissingCrown43 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-crown';

import { Container } from '../Container';

export const Tooth43 = () => {
  return (
    <Container>
      <Tooth>
        <Root43 enable={true} />
        <ImplantLowerJaw enable={false} />
        <MissingRoot43 enable={false} />
        <CrownSideView43 enable={true} />
        <ArtificialCrown43 enable={false} />
        <Prosthesis43 enable={false} />
        <MissingCrown43 enable={false} />
      </Tooth>
    </Container>
  );
};
