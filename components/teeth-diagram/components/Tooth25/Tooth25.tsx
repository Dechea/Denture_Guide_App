'use client';

import React from 'react';
import { Tooth25 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root25 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView25 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { ImplantUpperJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.implant';
import { MissingRoot25 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-root';
import { ArtificialCrown25 } from '@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown';
import { Prosthesis25 } from '@dechea/hes.ui.foundations.teeth.visualizations.prosthesis';
import { MissingCrown25 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-crown';

import { Container } from '../Container';

export const Tooth25 = () => {
  return (
    <Container>
      <Tooth>
        <Root25 enable={true} />
        <ImplantUpperJaw enable={false} />
        <MissingRoot25 enable={false} />
        <CrownSideView25 enable={true} />
        <ArtificialCrown25 enable={false} />
        <Prosthesis25 enable={false} />
        <MissingCrown25 enable={false} />
      </Tooth>
    </Container>
  );
};
