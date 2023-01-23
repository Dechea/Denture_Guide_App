'use client';

import React from 'react';
import { Tooth34 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root34 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView34 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { ImplantLowerJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.implant';
import { MissingRoot34 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-root';
import { ArtificialCrown34 } from '@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown';
import { Prosthesis34 } from '@dechea/hes.ui.foundations.teeth.visualizations.prosthesis';
import { MissingCrown34 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-crown';

import { Container } from '../Container';

export const Tooth34 = () => {
  return (
    <Container>
      <Tooth>
        <Root34 enable={true} />
        <ImplantLowerJaw enable={false} />
        <MissingRoot34 enable={false} />
        <CrownSideView34 enable={true} />
        <ArtificialCrown34 enable={false} />
        <Prosthesis34 enable={false} />
        <MissingCrown34 enable={false} />
      </Tooth>
    </Container>
  );
};
