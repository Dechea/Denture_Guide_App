'use client';

import React from 'react';
import { Tooth18 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import {
  Root18,
  Root18Left,
  Root18Middle,
  Root18Right,
} from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView18 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
// import {
//   AnchorLeft,
//   AnchorRight,
// } from '@dechea/hes.ui.foundations.teeth.visualizations.anchor';
// import { ApicalOstitisUpperJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.apical-ostitis';
// import { ArtificialCrown18 } from '@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown';
// import { Calculus18 } from '@dechea/hes.ui.foundations.teeth.visualizations.calculus';
// import { ImplantUpperJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.implant';
// import { MissingCrown18 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-crown';
// import {
//   MissingRoot18,
//   MissingRoot18Left,
//   MissingRoot18Middle,
//   MissingRoot18Right,
// } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-root';
// import { Prosthesis18 } from '@dechea/hes.ui.foundations.teeth.visualizations.prosthesis';
// import {
//   RootFilling18Left,
//   RootFilling18Middle,
//   RootFilling18Right,
// } from '@dechea/hes.ui.foundations.teeth.visualizations.root-filling';
import { Container } from '../Container';

export const Tooth18 = () => {
  return (
    <Container>
      <Tooth>
        <Root18>
          <Root18Middle />
          <Root18Left />
          <Root18Right />
        </Root18>
        <CrownSideView18 />

        {/* Implant visualization */}
        {/* <ImplantUpperJaw />
        <CrownSideView18 /> */}

        {/* Apical Ostitis visualization */}
        {/* <Root18>
          <Root18Middle>
            <ApicalOstitisUpperJaw />
          </Root18Middle>
          <Root18Left>
            <ApicalOstitisUpperJaw />
          </Root18Left>
          <Root18Right>
            <ApicalOstitisUpperJaw />
          </Root18Right>
        </Root18> 
        <CrownSideView18 />
        */}

        {/* Artificial Crown visualization */}
        {/* 
         <Root18>
          <Root18Middle />
          <Root18Left />
          <Root18Right />
        </Root18>
        <ArtificialCrown18 /> */}

        {/* Anchor visualization */}
        {/* 
         <Root18>
          <Root18Middle />
          <Root18Left />
          <Root18Right />
        </Root18>
        <ArtificialCrown18>
          <AnchorLeft />
          <AnchorRight />
        </ArtificialCrown18> */}

        {/* Calculus visualization */}
        {/*
         <Root18>
          <Root18Middle />
          <Root18Left />
          <Root18Right />
        </Root18>
        <CrownSideView18>
          <Calculus18 />
        </CrownSideView18> */}

        {/* Missing Crown visualization */}
        {/* <Root18>
          <Root18Middle />
          <Root18Left />
          <Root18Right />
        </Root18>
        <MissingCrown18 /> */}

        {/* Missing root visualization */}
        {/* <MissingRoot18>
          <MissingRoot18Middle />
          <MissingRoot18Left />
          <MissingRoot18Right />
        </MissingRoot18>
        <CrownSideView18 /> */}

        {/* Prosthesis visualization */}
        {/* <Root18>
          <Root18Middle />
          <Root18Left />
          <Root18Right />
        </Root18>
        <Prosthesis18 /> */}

        {/* Root filling visualization */}
        {/* <Root18>
          <Root18Middle>
            <RootFilling18Middle />
          </Root18Middle>
          <Root18Left>
            <RootFilling18Left />
          </Root18Left>
          <Root18Right>
            <RootFilling18Right />
          </Root18Right>
        </Root18>
        <CrownSideView18 /> */}
      </Tooth>
    </Container>
  );
};
