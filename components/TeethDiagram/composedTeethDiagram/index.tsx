'use client';

import TeethDiagram from '../container';
import Jaw from '../container/Jaw';
import {
  Tooth11Composed,
  Tooth12Composed,
  Tooth13Composed,
  Tooth14Composed,
  Tooth15Composed,
  Tooth16Composed,
  Tooth17Composed,
  Tooth18Composed,
  Tooth21Composed,
  Tooth22Composed,
  Tooth23Composed,
  Tooth24Composed,
  Tooth25Composed,
  Tooth26Composed,
  Tooth27Composed,
  Tooth28Composed,
  Tooth31Composed,
  Tooth32Composed,
  Tooth33Composed,
  Tooth34Composed,
  Tooth35Composed,
  Tooth36Composed,
  Tooth37Composed,
  Tooth38Composed,
  Tooth41Composed,
  Tooth42Composed,
  Tooth43Composed,
  Tooth44Composed,
  Tooth45Composed,
  Tooth46Composed,
  Tooth47Composed,
  Tooth48Composed,
} from '../teeth/composed-tooth';

export default function ComposedTeethDiagram() {
  return (
    <TeethDiagram>
      <Jaw customStyles='pb-[2.205882352%]'>
        <Tooth18Composed />
        <Tooth17Composed />
        <Tooth16Composed />
        <Tooth15Composed />
        <Tooth14Composed />
        <Tooth13Composed />
        <Tooth12Composed />
        <Tooth11Composed />
        <Tooth21Composed />
        <Tooth22Composed />
        <Tooth23Composed />
        <Tooth24Composed />
        <Tooth25Composed />
        <Tooth26Composed />
        <Tooth27Composed />
        <Tooth28Composed />
      </Jaw>
      <Jaw customStyles='pt-[2.205882352%]'>
        <Tooth48Composed />
        <Tooth47Composed />
        <Tooth46Composed />
        <Tooth45Composed />
        <Tooth44Composed />
        <Tooth43Composed />
        <Tooth42Composed />
        <Tooth41Composed />
        <Tooth31Composed />
        <Tooth32Composed />
        <Tooth33Composed />
        <Tooth34Composed />
        <Tooth35Composed />
        <Tooth36Composed />
        <Tooth37Composed />
        <Tooth38Composed />
      </Jaw>
    </TeethDiagram>
  );
}
