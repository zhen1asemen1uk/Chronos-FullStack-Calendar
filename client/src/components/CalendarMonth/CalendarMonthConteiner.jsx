import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { eventAPI } from '../../API/eventAPI';
import CalendarMonth from './CalendarMonth';

const CalendarMonthConteiner = () => {
   const dispatch = useDispatch();

   const user = useSelector(state => state.authState.user);
   const today = useSelector(state => state.monthState.today);
   const eventDataForMonth = useSelector(state => state.eventState.eventDataForMonth);

   const weekStartDay = today.clone().startOf('month').startOf('week');

   //for calculate day current month
   const monthStartDay = today.clone().startOf('month').format("X");
   const monthEndDay = today.clone().endOf('month').format("X");

   const getEventsInMonth = (user_id, gte, lte) => {
      dispatch(eventAPI.getEventByUserIDAndTime(user_id, gte, lte))
   }

   let day = weekStartDay.clone().subtract(1, 'day');

   useEffect(() => {
      if (user.id !== undefined) {
         getEventsInMonth(user.id, monthStartDay, monthEndDay);
      }
   }, [today, user.id, getEventsInMonth])

   const arrDays = [...Array(42)].map(() => {
      return day.add(1, 'day').clone()
   });

   return (
      <CalendarMonth
         today={today}
         arrDays={arrDays}
         eventDataForMonth={eventDataForMonth} />
   )

};

export default CalendarMonthConteiner;