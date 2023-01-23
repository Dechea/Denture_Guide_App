'use client';

import React from 'react';
import { Tooth26 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import {
  Root26,
  Root26Middle,
  Root26Left,
  Root26Right,
} from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView26 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { ImplantUpperJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.implant';
import {
  MissingRoot26,
  MissingRoot26Middle,
  MissingRoot26Left,
  MissingRoot26Right,
} from '@dechea/hes.ui.foundations.teeth.visualizations.missing-root';
import { ArtificialCrown26 } from '@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown';
import { Prosthesis26 } from '@dechea/hes.ui.foundations.teeth.visualizations.prosthesis';
import { MissingCrown26 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-crown';

import { Container } from '../Container';

export const Tooth26 = () => {
  return (
    <Container>
      <Tooth>
        <Root26 enable={true}>
          <Root26Middle enable={true} />
          <Root26Left enable={true} />
          <Root26Right enable={true} />
        </Root26>

        <ImplantUpperJaw enable={false} />

        <MissingRoot26 enable={false}>
          <MissingRoot26Middle enable={false} />
          <MissingRoot26Left enable={false} />
          <MissingRoot26Right enable={false} />
        </MissingRoot26>

        <CrownSideView26 enable={true} />
        <ArtificialCrown26 enable={false} />
        <Prosthesis26 enable={false} />
        <MissingCrown26 enable={false} />
      </Tooth>
    </Container>
  );
};
