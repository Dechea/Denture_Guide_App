'use client';

import React from 'react';
import { Tooth22 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root22 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView22 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { ImplantUpperJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.implant';
import { MissingRoot22 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-root';
import { ArtificialCrown22 } from '@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown';
import { Prosthesis22 } from '@dechea/hes.ui.foundations.teeth.visualizations.prosthesis';
import { MissingCrown22 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-crown';

import { Container } from '../Container';

export const Tooth22 = () => {
  return (
    <Container>
      <Tooth>
        <Root22 enable={true} />
        <ImplantUpperJaw enable={false} />
        <MissingRoot22 enable={false} />
        <CrownSideView22 enable={true} />
        <ArtificialCrown22 enable={false} />
        <Prosthesis22 enable={false} />
        <MissingCrown22 enable={false} />
      </Tooth>
    </Container>
  );
};
