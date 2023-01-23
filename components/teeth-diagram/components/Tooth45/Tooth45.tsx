'use client';

import { Tooth45 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root45 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView45 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { ImplantLowerJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.implant';
import { MissingRoot45 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-root';
import { ArtificialCrown45 } from '@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown';
import { Prosthesis45 } from '@dechea/hes.ui.foundations.teeth.visualizations.prosthesis';
import { MissingCrown45 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-crown';

import { Container } from '../Container';

export const Tooth45 = () => {
  return (
    <Container>
      <Tooth>
        <Root45 enable={true} />
        <ImplantLowerJaw enable={false} />
        <MissingRoot45 enable={false} />
        <CrownSideView45 enable={true} />
        <ArtificialCrown45 enable={false} />
        <Prosthesis45 enable={false} />
        <MissingCrown45 enable={false} />
      </Tooth>
    </Container>
  );
};
