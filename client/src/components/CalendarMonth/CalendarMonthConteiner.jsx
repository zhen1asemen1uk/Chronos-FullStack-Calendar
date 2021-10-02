import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CalendarMonth from './CalendarMonth';
import ControlBarConteiner from './ControlBar/ControlBarConteiner';
import WeekBar from './WeekBar/WeekBar';

const CalendarMonthConteiner = () => {
   const dispath = useDispatch();
   dispath()
   const today = useSelector(state => state.monthStore.today);
   const events = useSelector(state => state.monthStore.events);
   console.log(events);
   const weekStartDay = today.clone().startOf('month').startOf('week');
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