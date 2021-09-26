import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

import Calendar from './components/Calendar/Calendar';
import HeaderBar from './components/HeaderBar/HeaderBar';
import WeekBar from './components/WeekBar/WeekBar';
import ControlBarConteiner from './components/ControlBar/ControlBarConteiner';
import stl from './style/App.module.css';

const App = () => {
  moment.updateLocale('en', { week: { dow: 1 } });
  const today = useSelector(state => state.calendarStore.today);
  
  //start week: Monday

  let weekStartDay = today.clone().startOf('month').startOf('week');
  let weekEndDay = today.clone().endOf('month').endOf('week');
  let day = weekStartDay.clone();

  let calendarArr = [];

  //fill calendar
  for (let i = weekEndDay; !day.isAfter(i); day.add(1, 'day')) {
    calendarArr.push(day.clone());
  }

  return (
    <div className={stl.conteiner}>
      <h1>Hello calendar</h1>
      <div className={stl.wrapp}>
        <HeaderBar />
        <ControlBarConteiner />
        <WeekBar />
        <Calendar weekStartDay={weekStartDay} today={today} />
      </div>
    </div>
  );
};

export default App;