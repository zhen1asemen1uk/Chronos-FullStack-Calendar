import React from 'react';
import AddEventConteiner from '../Event/AddEventConteiner';

import stl from './CalendarMonth.module.css'
import ControlBarConteiner from './ControlBar/ControlBarConteiner';
import WeekBar from './WeekBar/WeekBar';

const CalendarMonth = (props) => {
   const { today, arrDays, eventDataForMonth, isModalSet } = props;

   return (<>
      <ControlBarConteiner />
      <WeekBar />
      <div className={stl.wrapp}>{
         arrDays.map((numDay) => {
            const startDay = numDay.clone().startOf("day").format('X');
            const endDay = numDay.clone().endOf("day").format('X');

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
            const eventsOfDay = () => {
               if (eventDataForMonth &&
                  typeof eventDataForMonth == "object") {

                  return eventDataForMonth
                     .filter((e, i) => e.date >= startDay && e.date <= endDay)
                     .map((e, i) => <li key={e.date + i} > {e.title}</li>)
               }
            }

            return (
               <div key={numDay.format('DDMMYYYY')} className={classWeek()} 
                  onDoubleClick={() => { isModalSet(true,<AddEventConteiner/>)}}>

                  <div className={classNum()}>
                     <div>{numDay.format('D')}</div>
                  </div>

                  <ul className={stl.events}>
                     {eventsOfDay()}
                  </ul>

               </div>
            )
         })
      }</div >
   </>);
};

export default CalendarMonth;