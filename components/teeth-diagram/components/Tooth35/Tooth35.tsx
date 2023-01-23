'use client';

import React from 'react';
import { Tooth35 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root35 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView35 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { ImplantLowerJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.implant';
import { MissingRoot35 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-root';
import { ArtificialCrown35 } from '@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown';
import { Prosthesis35 } from '@dechea/hes.ui.foundations.teeth.visualizations.prosthesis';
import { MissingCrown35 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-crown';

import { Container } from '../Container';

export const Tooth35 = () => {
  return (
    <Container>
      <Tooth>
        <Root35 enable={true} />
        <ImplantLowerJaw enable={false} />
        <MissingRoot35 enable={false} />
        <CrownSideView35 enable={true} />
        <ArtificialCrown35 enable={false} />
        <Prosthesis35 enable={false} />
        <MissingCrown35 enable={false} />
      </Tooth>
    </Container>
  );
};
