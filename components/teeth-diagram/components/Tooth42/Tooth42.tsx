'use client';

import { Tooth42 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root42 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView42 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { ImplantLowerJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.implant';
import { MissingRoot42 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-root';
import { ArtificialCrown42 } from '@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown';
import { Prosthesis42 } from '@dechea/hes.ui.foundations.teeth.visualizations.prosthesis';
import { MissingCrown42 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-crown';

import { Container } from '../Container';

export const Tooth42 = () => {
  return (
    <Container>
      <Tooth>
        <Root42 enable={true} />
        <ImplantLowerJaw enable={false} />
        <MissingRoot42 enable={false} />
        <CrownSideView42 enable={true} />
        <ArtificialCrown42 enable={false} />
        <Prosthesis42 enable={false} />
        <MissingCrown42 enable={false} />
      </Tooth>
    </Container>
  );
};
