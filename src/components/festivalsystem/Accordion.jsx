"use client";

import Accordionitem from "./AccordionItem";
import { useState } from "react";

const Accordion = ({ questionOne, questionTwo, questionThree, questionFour, textOne, textTwo, textThree, textFour, DesktoptextSize, MobileTextSize }) => {
  const [isOpen, setIsOpen, item] = useState(0);
  return (
    <div>
      <ul className=" list-none w-full">
        <Accordionitem item={1} isOpen={isOpen} setIsOpen={setIsOpen} questionOne={questionOne} textOne={textOne} DesktoptextSize={DesktoptextSize} MobileTextSize={MobileTextSize} />
        <Accordionitem item={2} isOpen={isOpen} setIsOpen={setIsOpen} questionTwo={questionTwo} textTwo={textTwo} DesktoptextSize={DesktoptextSize} MobileTextSize={MobileTextSize} />
        <Accordionitem item={3} isOpen={isOpen} setIsOpen={setIsOpen} questionThree={questionThree} textThree={textThree} DesktoptextSize={DesktoptextSize} MobileTextSize={MobileTextSize} />
        <Accordionitem item={4} isOpen={isOpen} setIsOpen={setIsOpen} questionFour={questionFour} textFour={textFour} DesktoptextSize={DesktoptextSize} MobileTextSize={MobileTextSize} />
      </ul>
    </div>
  );
};

export default Accordion;
