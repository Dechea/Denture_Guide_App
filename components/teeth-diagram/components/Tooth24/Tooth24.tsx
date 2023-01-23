'use client';

import React from 'react';
import { Tooth24 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import {
  Root24,
  Root24Left,
  Root24Right,
} from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView24 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { ImplantUpperJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.implant';
import {
  MissingRoot24,
  MissingRoot24Left,
  MissingRoot24Right,
} from '@dechea/hes.ui.foundations.teeth.visualizations.missing-root';
import { ArtificialCrown24 } from '@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown';
import { Prosthesis24 } from '@dechea/hes.ui.foundations.teeth.visualizations.prosthesis';
import { MissingCrown24 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-crown';

import { Container } from '../Container';

export const Tooth24 = () => {
  return (
    <Container>
      <Tooth>
        <Root24 enable={true}>
          <Root24Left enable={true} />
          <Root24Right enable={true} />
        </Root24>

        <ImplantUpperJaw enable={false} />

        <MissingRoot24 enable={false}>
          <MissingRoot24Left enable={false} />
          <MissingRoot24Right enable={false} />
        </MissingRoot24>

        <CrownSideView24 enable={true} />
        <ArtificialCrown24 enable={false} />
        <Prosthesis24 enable={false} />
        <MissingCrown24 enable={false} />
      </Tooth>
    </Container>
  );
};
