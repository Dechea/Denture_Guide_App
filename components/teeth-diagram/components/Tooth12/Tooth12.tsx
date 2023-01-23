'use client';

import React from 'react';
import { Tooth12 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root12 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView12 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { ImplantUpperJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.implant';
import { MissingRoot12 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-root';
import { ArtificialCrown12 } from '@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown';
import { Prosthesis12 } from '@dechea/hes.ui.foundations.teeth.visualizations.prosthesis';
import { MissingCrown12 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-crown';

import { Container } from '../Container';

export const Tooth12 = () => {
  return (
    <Container>
      <Tooth>
        <Root12 enable={true} />
        <ImplantUpperJaw enable={false} />
        <MissingRoot12 enable={false} />
        <CrownSideView12 enable={true} />
        <ArtificialCrown12 enable={false} />
        <Prosthesis12 enable={false} />
        <MissingCrown12 enable={false} />
      </Tooth>
    </Container>
  );
};
