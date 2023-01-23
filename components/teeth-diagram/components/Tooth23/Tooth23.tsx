'use client';

import React from 'react';
import { Tooth23 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root23 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView23 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { ImplantUpperJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.implant';
import { MissingRoot23 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-root';
import { ArtificialCrown23 } from '@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown';
import { Prosthesis23 } from '@dechea/hes.ui.foundations.teeth.visualizations.prosthesis';
import { MissingCrown23 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-crown';

import { Container } from '../Container';

export const Tooth23 = () => {
  return (
    <Container>
      <Tooth>
        <Root23 enable={true} />
        <ImplantUpperJaw enable={false} />
        <MissingRoot23 enable={false} />
        <CrownSideView23 enable={true} />
        <ArtificialCrown23 enable={false} />
        <Prosthesis23 enable={false} />
        <MissingCrown23 enable={false} />
      </Tooth>
    </Container>
  );
};
