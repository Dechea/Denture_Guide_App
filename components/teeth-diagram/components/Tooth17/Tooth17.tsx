'use client';

import React from 'react';
import { Tooth17 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import {
  Root17,
  Root17Middle,
  Root17Left,
  Root17Right,
} from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView17 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { ImplantUpperJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.implant';
import {
  MissingRoot17,
  MissingRoot17Middle,
  MissingRoot17Left,
  MissingRoot17Right,
} from '@dechea/hes.ui.foundations.teeth.visualizations.missing-root';
import { ArtificialCrown17 } from '@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown';
import { Prosthesis17 } from '@dechea/hes.ui.foundations.teeth.visualizations.prosthesis';
import { MissingCrown17 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-crown';

import { Container } from '../Container';

export const Tooth17 = () => {
  return (
    <Container>
      <Tooth>
        <Root17 enable={true}>
          <Root17Middle enable={true} />
          <Root17Left enable={true} />
          <Root17Right enable={true} />
        </Root17>

        <ImplantUpperJaw enable={false} />

        <MissingRoot17 enable={false}>
          <MissingRoot17Middle enable={false} />
          <MissingRoot17Left enable={false} />
          <MissingRoot17Right enable={false} />
        </MissingRoot17>

        <CrownSideView17 enable={true} />
        <ArtificialCrown17 enable={false} />
        <Prosthesis17 enable={false} />
        <MissingCrown17 enable={false} />
      </Tooth>
    </Container>
  );
};
