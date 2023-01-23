'use client';

import React from 'react';
import { Tooth31 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root31 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView31 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { ImplantLowerJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.implant';
import { MissingRoot31 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-root';
import { ArtificialCrown31 } from '@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown';
import { Prosthesis31 } from '@dechea/hes.ui.foundations.teeth.visualizations.prosthesis';
import { MissingCrown31 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-crown';

import { Container } from '../Container';

export const Tooth31 = () => {
  return (
    <Container>
      <Tooth>
        <Root31 enable={true} />
        <ImplantLowerJaw enable={false} />
        <MissingRoot31 enable={false} />
        <CrownSideView31 enable={true} />
        <ArtificialCrown31 enable={false} />
        <Prosthesis31 enable={false} />
        <MissingCrown31 enable={false} />
      </Tooth>
    </Container>
  );
};
