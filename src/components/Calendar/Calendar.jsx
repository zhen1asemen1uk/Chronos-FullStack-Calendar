import React from 'react';

import stl from './Calendar.module.css'

const Calendar = (props) => {
   const { weekStartDay, today } = props;

   let day = weekStartDay.clone().subtract(1, 'day');
   const arrDays = [...Array(42)].map(() => day.add(1, 'day').clone());
   return (
      <div className={stl.wrapp}>{
         arrDays.map((numDay) => {
            return (
               <div key={numDay.format('DDMMYYYY')} className={
                  numDay.day() === 0 || numDay.day() === 6 ?
                     stl.week :
                     stl.day}>

                  <div className={
                     numDay.date() === today.date() &&
                        numDay.month() === today.month() ?
                        `${stl.numToday} ${stl.numDay}` :
                        stl.numDay}>
                     {numDay.format('D')}
                  </div>
               </div>
            )
         })
      }</div>
   );
};

export default Calendar;