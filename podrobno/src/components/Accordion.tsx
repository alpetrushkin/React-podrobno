import React, {useState} from 'react';


type AccordionPropsType = {
   title: string
   collapsed: boolean
   onClick: () => void
}

export function Accordion(props: AccordionPropsType) {
   return (
      <div>
         <AccordionTitle titleValue={props.title} onClick={props.onClick}/>
         {!props.collapsed && <AccordionBody />}
      </div>
   )
}

type AccordionTitlePropsType = {
   titleValue: string
   onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
   return (
      <h3 onClick={props.onClick}>
         {props.titleValue}
      </h3>
   )
}

function AccordionBody() {
   return (
      <ul>
         <li>1</li>
         <li>2</li>
         <li>3</li>
      </ul>
   )
}
