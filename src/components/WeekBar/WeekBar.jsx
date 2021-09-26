import React from 'react';

import stl from './WeekBar.module.css';

const WeekBar = () => {
   // const weekDay = 7;
   const arrDay = [...Array(7)];

   return (
      <div className={stl.wrapp}>{
         arrDay.map((item,index) => {
           return <div key={index} className={stl.weekDay}>{index}</div>
         })
      }</div >
   );
};

export default WeekBar;