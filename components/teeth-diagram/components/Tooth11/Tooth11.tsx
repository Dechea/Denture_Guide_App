'use client';

import React from 'react';
import { Tooth11 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root11 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView11 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { ImplantUpperJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.implant';
import { MissingRoot11 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-root';
import { ArtificialCrown11 } from '@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown';
import { Prosthesis11 } from '@dechea/hes.ui.foundations.teeth.visualizations.prosthesis';
import { MissingCrown11 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-crown';

import { Container } from '../Container';

export const Tooth11 = ({ implant = false, artificial = false, root=true }: { implant: boolean, artificial: boolean, root: boolean }) => {
  return (
    <Container>
      <Tooth>
        <Root11 enable={root} />
        <ImplantUpperJaw enable={implant} />
        <MissingRoot11 enable={false} />
        <CrownSideView11 enable={true} />
        <ArtificialCrown11 enable={artificial} />
        <Prosthesis11 enable={false} />
        <MissingCrown11 enable={false} />
      </Tooth>
    </Container>
  );
};
