import React from 'react';

import stl from './Calendar.module.css'

const Calendar = (props) => {
   const { today, arrDays } = props;

   return (
      <div className={stl.wrapp}>{
         arrDays.map((numDay) => {

            const classWeek = () => {
               if (numDay.day() === 0 || numDay.day() === 6) {
                  return `${stl.week}`
               }
               return `${stl.day}`
            }

            const classNum = () => {
               if (numDay.date() === today.date() &&
                  numDay.month() === today.month()) {
                  return `${stl.numToday} ${stl.numDay}`
               } else if (numDay.month() !== today.month()) {
                  return `${stl.numAnotherMonth}  ${stl.numDay}`
               } else {
                  return `${stl.numDay}`
               }
            }

            return (
               <div key={numDay.format('DDMMYYYY')} className={classWeek()}>
                  <div className={classNum()}>
                     {numDay.format('D')}
                  </div>
               </div>
            )
         })
      }</div >
   );
};

export default Calendar;