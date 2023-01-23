'use client';

import React from 'react';
import { Tooth38 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import {
  Root38,
  Root38Left,
  Root38Right,
} from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView38 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { ImplantLowerJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.implant';
import {
  MissingRoot38,
  MissingRoot38Left,
  MissingRoot38Right,
} from '@dechea/hes.ui.foundations.teeth.visualizations.missing-root';
import { ArtificialCrown38 } from '@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown';
import { Prosthesis38 } from '@dechea/hes.ui.foundations.teeth.visualizations.prosthesis';
import { MissingCrown38 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-crown';

import { Container } from '../Container';

export const Tooth38 = () => {
  return (
    <Container>
      <Tooth>
        <Root38 enable={true}>
          <Root38Right enable={true} />
          <Root38Left enable={true} />
        </Root38>

        <ImplantLowerJaw enable={false} />

        <MissingRoot38 enable={false}>
          <MissingRoot38Right enable={false} />
          <MissingRoot38Left enable={false} />
        </MissingRoot38>

        <CrownSideView38 enable={true} />
        <ArtificialCrown38 enable={false} />
        <Prosthesis38 enable={false} />
        <MissingCrown38 enable={false} />
      </Tooth>
    </Container>
  );
};
