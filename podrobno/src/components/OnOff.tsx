import React from 'react';

type OnOffPropsType = {
   on: boolean
   onChange: (value: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {
   const wrapper = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '20px',
   }

   const onStyle = {
      marginRight: '5px',
      width: '25px',
      height: '20px',
      backgroundColor: props.on ? 'green' : 'white',
      border: '1px solid black',
      cursor: 'pointer'
   }

   const offStyle = {
      width: '25px',
      height: '20px',
      backgroundColor: props.on ? 'white' : 'red',
      border: '1px solid black',
      cursor: 'pointer'
   }

   const indicatorStyle = {
      marginLeft: '10px',
      width: '15px',
      height: '15px',
      backgroundColor: props.on ? 'green' : 'red',
      border: '1px solid black',
      borderRadius: '50%',

   }

   return (
      <div style={wrapper}>
         <div style={onStyle} onClick={() => {props.onChange(true)}}>On</div>
         <div style={offStyle} onClick={() => {props.onChange(false)}}>Off</div>
         <div style={indicatorStyle}></div>
      </div>
   );
};
