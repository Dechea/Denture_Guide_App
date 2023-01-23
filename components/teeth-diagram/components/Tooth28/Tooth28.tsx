'use client';

import React from 'react';
import { Tooth28 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import {
  Root28,
  Root28Middle,
  Root28Left,
  Root28Right,
} from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView28 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { ImplantUpperJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.implant';
import {
  MissingRoot28,
  MissingRoot28Middle,
  MissingRoot28Left,
  MissingRoot28Right,
} from '@dechea/hes.ui.foundations.teeth.visualizations.missing-root';
import { ArtificialCrown28 } from '@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown';
import { Prosthesis28 } from '@dechea/hes.ui.foundations.teeth.visualizations.prosthesis';
import { MissingCrown28 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-crown';

import { Container } from '../Container';

export const Tooth28 = () => {
  return (
    <Container>
      <Tooth>
        <Root28 enable={true}>
          <Root28Middle enable={true} />
          <Root28Left enable={true} />
          <Root28Right enable={true} />
        </Root28>

        <ImplantUpperJaw enable={false} />

        <MissingRoot28 enable={false}>
          <MissingRoot28Middle enable={false} />
          <MissingRoot28Left enable={false} />
          <MissingRoot28Right enable={false} />
        </MissingRoot28>

        <CrownSideView28 enable={true} />
        <ArtificialCrown28 enable={false} />
        <Prosthesis28 enable={false} />
        <MissingCrown28 enable={false} />
      </Tooth>
    </Container>
  );
};
