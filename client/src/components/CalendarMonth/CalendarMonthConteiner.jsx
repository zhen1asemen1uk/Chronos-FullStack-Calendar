import React from 'react';
import { useSelector } from 'react-redux';

import CalendarMonth from './CalendarMonth';
import ControlBarConteiner from './ControlBar/ControlBarConteiner';
import WeekBar from './WeekBar/WeekBar';

const CalendarMonthConteiner = () => {
   const today = useSelector(state => state.monthStore.today);

   let weekStartDay = today.clone().startOf('month').startOf('week');
   let day = weekStartDay.clone().subtract(1, 'day');

   const arrDays = [...Array(42)].map(() => {
      return day.add(1, 'day').clone()
   });

   return (
      <>
         <ControlBarConteiner />
         <WeekBar />
         <CalendarMonth
            today={today}
            arrDays={arrDays} />
      </>
   );
};

export default CalendarMonthConteiner;