'use client';

import React from 'react';
import { Tooth32 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root32 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView32 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { ImplantLowerJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.implant';
import { MissingRoot32 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-root';
import { ArtificialCrown32 } from '@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown';
import { Prosthesis32 } from '@dechea/hes.ui.foundations.teeth.visualizations.prosthesis';
import { MissingCrown32 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-crown';

import { Container } from '../Container';

export const Tooth32 = () => {
  return (
    <Container>
      <Tooth>
        <Root32 enable={true} />
        <ImplantLowerJaw enable={false} />
        <MissingRoot32 enable={false} />
        <CrownSideView32 enable={true} />
        <ArtificialCrown32 enable={false} />
        <Prosthesis32 enable={false} />
        <MissingCrown32 enable={false} />
      </Tooth>
    </Container>
  );
};
