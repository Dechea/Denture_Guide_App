'use client';

import React from 'react';
import { Tooth21 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root21 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView21 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { ImplantUpperJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.implant';
import { MissingRoot21 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-root';
import { ArtificialCrown21 } from '@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown';
import { Prosthesis21 } from '@dechea/hes.ui.foundations.teeth.visualizations.prosthesis';
import { MissingCrown21 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-crown';

import { Container } from '../Container';

export const Tooth21 = () => {
  return (
    <Container>
      <Tooth>
        <Root21 enable={true} />
        <ImplantUpperJaw enable={false} />
        <MissingRoot21 enable={false} />
        <CrownSideView21 enable={true} />
        <ArtificialCrown21 enable={false} />
        <Prosthesis21 enable={false} />
        <MissingCrown21 enable={false} />
      </Tooth>
    </Container>
  );
};
