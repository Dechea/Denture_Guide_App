'use client';

import React from 'react';
import { Tooth15 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root15 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView15 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { ImplantUpperJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.implant';
import { MissingRoot15 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-root';
import { ArtificialCrown15 } from '@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown';
import { Prosthesis15 } from '@dechea/hes.ui.foundations.teeth.visualizations.prosthesis';
import { MissingCrown15 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-crown';

import { Container } from '../Container';

export const Tooth15 = () => {
  return (
    <Container>
      <Tooth>
        <Root15 enable={true} />
        <ImplantUpperJaw enable={false} />
        <MissingRoot15 enable={false} />
        <CrownSideView15 enable={true} />
        <ArtificialCrown15 enable={false} />
        <Prosthesis15 enable={false} />
        <MissingCrown15 enable={false} />
      </Tooth>
    </Container>
  );
};
