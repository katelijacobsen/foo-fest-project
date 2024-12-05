"use client";

import Accordionitem from "./AccordionItem";
import { useState } from "react";

const Accordion = ({ dimensions, warrantyInformation, shippingInformation, returnPolicy }) => {
  const [isOpen, setIsOpen, item] = useState(0);
  return (
    <div>
      <ul className=" list-none w-full">
        <Accordionitem item={1} isOpen={isOpen} setIsOpen={setIsOpen} question="Hvor rene er camping pladserne?" textOne="bla bla 1" />
        <Accordionitem item={2} isOpen={isOpen} setIsOpen={setIsOpen} question="Hvor tæt på ligger toilletterne?" textOne="bla bla 2" />
        <Accordionitem item={3} isOpen={isOpen} setIsOpen={setIsOpen} question="Hvor er madområderne i forhold til campingpladserne?" textOne="bla bla 3" />
        <Accordionitem item={4} isOpen={isOpen} setIsOpen={setIsOpen} question="Bliver der ryddet op efter mig?" textOne="bla bla 4" />
      </ul>
    </div>
  );
};

export default Accordion;
