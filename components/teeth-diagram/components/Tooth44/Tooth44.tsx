'use client';

import { Tooth44 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root44 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView44 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { ImplantLowerJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.implant';
import { MissingRoot44 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-root';
import { ArtificialCrown44 } from '@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown';
import { Prosthesis44 } from '@dechea/hes.ui.foundations.teeth.visualizations.prosthesis';
import { MissingCrown44 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-crown';

import { Container } from '../Container';

export const Tooth44 = () => {
  return (
    <Container>
      <Tooth>
        <Root44 enable={true} />
        <ImplantLowerJaw enable={false} />
        <MissingRoot44 enable={false} />
        <CrownSideView44 enable={true} />
        <ArtificialCrown44 enable={false} />
        <Prosthesis44 enable={false} />
        <MissingCrown44 enable={false} />
      </Tooth>
    </Container>
  );
};
