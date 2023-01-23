'use client';

import React from 'react';
import { Tooth27 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import {
  Root27,
  Root27Middle,
  Root27Left,
  Root27Right,
} from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView27 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { ImplantUpperJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.implant';
import {
  MissingRoot27,
  MissingRoot27Middle,
  MissingRoot27Left,
  MissingRoot27Right,
} from '@dechea/hes.ui.foundations.teeth.visualizations.missing-root';
import { ArtificialCrown27 } from '@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown';
import { Prosthesis27 } from '@dechea/hes.ui.foundations.teeth.visualizations.prosthesis';
import { MissingCrown27 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-crown';

import { Container } from '../Container';

export const Tooth27 = () => {
  return (
    <Container>
      <Tooth>
        <Root27 enable={true}>
          <Root27Middle enable={true} />
          <Root27Left enable={true} />
          <Root27Right enable={true} />
        </Root27>

        <ImplantUpperJaw enable={false} />

        <MissingRoot27 enable={false}>
          <MissingRoot27Middle enable={false} />
          <MissingRoot27Left enable={false} />
          <MissingRoot27Right enable={false} />
        </MissingRoot27>

        <CrownSideView27 enable={true} />
        <ArtificialCrown27 enable={false} />
        <Prosthesis27 enable={false} />
        <MissingCrown27 enable={false} />
      </Tooth>
    </Container>
  );
};
