'use client';

import React from 'react';
import { Tooth36 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import {
  Root36,
  Root36Left,
  Root36Right,
} from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView36 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { ImplantLowerJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.implant';
import {
  MissingRoot36,
  MissingRoot36Left,
  MissingRoot36Right,
} from '@dechea/hes.ui.foundations.teeth.visualizations.missing-root';
import { ArtificialCrown36 } from '@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown';
import { Prosthesis36 } from '@dechea/hes.ui.foundations.teeth.visualizations.prosthesis';
import { MissingCrown36 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-crown';

import { Container } from '../Container';

export const Tooth36 = () => {
  return (
    <Container>
      <Tooth>
        <Root36 enable={true}>
          <Root36Right enable={true} />
          <Root36Left enable={true} />
        </Root36>

        <ImplantLowerJaw enable={false} />

        <MissingRoot36 enable={false}>
          <MissingRoot36Right enable={false} />
          <MissingRoot36Left enable={false} />
        </MissingRoot36>

        <CrownSideView36 enable={true} />
        <ArtificialCrown36 enable={false} />
        <Prosthesis36 enable={false} />
        <MissingCrown36 enable={false} />
      </Tooth>
    </Container>
  );
};
