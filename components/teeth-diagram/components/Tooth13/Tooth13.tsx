'use client';

import React from 'react';
import { Tooth13 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root13 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView13 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { ImplantUpperJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.implant';
import { MissingRoot13 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-root';
import { ArtificialCrown13 } from '@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown';
import { Prosthesis13 } from '@dechea/hes.ui.foundations.teeth.visualizations.prosthesis';
import { MissingCrown13 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-crown';

import { Container } from '../Container';

export const Tooth13 = () => {
  return (
    <Container>
      <Tooth>
        <Root13 enable={true} />
        <ImplantUpperJaw enable={false} />
        <MissingRoot13 enable={false} />
        <CrownSideView13 enable={true} />
        <ArtificialCrown13 enable={false} />
        <Prosthesis13 enable={false} />
        <MissingCrown13 enable={false} />
      </Tooth>
    </Container>
  );
};
