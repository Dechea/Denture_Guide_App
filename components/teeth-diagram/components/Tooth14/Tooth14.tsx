'use client';

import React from 'react';
import { Tooth14 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import {
  Root14,
  Root14Left,
  Root14Right,
} from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView14 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { ImplantUpperJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.implant';
import {
  MissingRoot14,
  MissingRoot14Left,
  MissingRoot14Right,
} from '@dechea/hes.ui.foundations.teeth.visualizations.missing-root';
import { ArtificialCrown14 } from '@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown';
import { Prosthesis14 } from '@dechea/hes.ui.foundations.teeth.visualizations.prosthesis';
import { MissingCrown14 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-crown';

import { Container } from '../Container';

export const Tooth14 = () => {
  return (
    <Container>
      <Tooth>
        <Root14 enable={true}>
          <Root14Right enable={true} />
          <Root14Left enable={true} />
        </Root14>

        <ImplantUpperJaw enable={false} />

        <MissingRoot14 enable={false}>
          <MissingRoot14Right enable={false} />
          <MissingRoot14Left enable={false} />
        </MissingRoot14>

        <CrownSideView14 enable={true} />
        <ArtificialCrown14 enable={false} />
        <Prosthesis14 enable={false} />
        <MissingCrown14 enable={false} />
      </Tooth>
    </Container>
  );
};
