import React from 'react';
import { useSelector } from 'react-redux';

import Calendar from './Calendar';

const CalendarConteiner = () => {
   const today = useSelector(state => state.calendarStore.today);

   let weekStartDay = today.clone().startOf('month').startOf('week');
   let day = weekStartDay.clone().subtract(1, 'day');

   const arrDays = [...Array(42)].map(() => {
      return day.add(1, 'day').clone()
   });

   return <Calendar
      today={today}
      arrDays={arrDays} />;
};

export default CalendarConteiner;