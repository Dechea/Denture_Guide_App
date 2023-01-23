'use client';

import React from 'react';
import { Tooth37 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import {
  Root37,
  Root37Left,
  Root37Right,
} from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView37 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { ImplantLowerJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.implant';
import {
  MissingRoot37,
  MissingRoot37Left,
  MissingRoot37Right,
} from '@dechea/hes.ui.foundations.teeth.visualizations.missing-root';
import { ArtificialCrown37 } from '@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown';
import { Prosthesis37 } from '@dechea/hes.ui.foundations.teeth.visualizations.prosthesis';
import { MissingCrown37 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-crown';

import { Container } from '../Container';

export const Tooth37 = () => {
  return (
    <Container>
      <Tooth>
        <Root37 enable={true}>
          <Root37Right enable={true} />
          <Root37Left enable={true} />
        </Root37>

        <ImplantLowerJaw enable={false} />

        <MissingRoot37 enable={false}>
          <MissingRoot37Right enable={false} />
          <MissingRoot37Left enable={false} />
        </MissingRoot37>

        <CrownSideView37 enable={true} />
        <ArtificialCrown37 enable={false} />
        <Prosthesis37 enable={false} />
        <MissingCrown37 enable={false} />
      </Tooth>
    </Container>
  );
};
