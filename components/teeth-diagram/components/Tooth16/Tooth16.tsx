'use client';

import React from 'react';
import { Tooth16 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import {
  Root16,
  Root16Middle,
  Root16Left,
  Root16Right,
} from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView16 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { ImplantUpperJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.implant';
import {
  MissingRoot16,
  MissingRoot16Middle,
  MissingRoot16Left,
  MissingRoot16Right,
} from '@dechea/hes.ui.foundations.teeth.visualizations.missing-root';
import { ArtificialCrown16 } from '@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown';
import { Prosthesis16 } from '@dechea/hes.ui.foundations.teeth.visualizations.prosthesis';
import { MissingCrown16 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-crown';

import { Container } from '../Container';

export const Tooth16 = () => {
  return (
    <Container>
      <Tooth>
        <Root16 enable={true}>
          <Root16Middle enable={true} />
          <Root16Left enable={true} />
          <Root16Right enable={true} />
        </Root16>

        <ImplantUpperJaw enable={false} />

        <MissingRoot16 enable={false}>
          <MissingRoot16Middle enable={false} />
          <MissingRoot16Left enable={false} />
          <MissingRoot16Right enable={false} />
        </MissingRoot16>

        <CrownSideView16 enable={true} />
        <ArtificialCrown16 enable={false} />
        <Prosthesis16 enable={false} />
        <MissingCrown16 enable={false} />
      </Tooth>
    </Container>
  );
};
