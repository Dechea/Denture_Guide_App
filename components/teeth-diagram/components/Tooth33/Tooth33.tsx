'use client';

import React from 'react';
import { Tooth33 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root33 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView33 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { ImplantLowerJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.implant';
import { MissingRoot33 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-root';
import { ArtificialCrown33 } from '@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown';
import { Prosthesis33 } from '@dechea/hes.ui.foundations.teeth.visualizations.prosthesis';
import { MissingCrown33 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-crown';

import { Container } from '../Container';

export const Tooth33 = () => {
  return (
    <Container>
      <Tooth>
        <Root33 enable={true} />
        <ImplantLowerJaw enable={false} />
        <MissingRoot33 enable={false} />
        <CrownSideView33 enable={true} />
        <ArtificialCrown33 enable={false} />
        <Prosthesis33 enable={false} />
        <MissingCrown33 enable={false} />
      </Tooth>
    </Container>
  );
};
