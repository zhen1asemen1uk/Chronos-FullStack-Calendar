import React from 'react';
// import { useSelector } from 'react-redux';

import HeaderBar from './components/HeaderBar/HeaderBar';
import WeekBar from './components/WeekBar/WeekBar';
import ControlBarConteiner from './components/ControlBar/ControlBarConteiner';
import CalendarConteiner from './components/Calendar/CalendarConteiner';
import stl from './style/App.module.css';

const App = () => {
  // const today = useSelector(state => state.calendarStore.today);

  // let weekStartDay = today.clone().startOf('month').startOf('week');
  // let weekEndDay = today.clone().endOf('month').endOf('week');
  // let day = weekStartDay.clone();

  // let calendarArr = [];

  //fill calendar
  // for (let i = weekEndDay; !day.isAfter(i); day.add(1, 'day')) {
  //   calendarArr.push(day.clone());
  // }

  return (
    <div className={stl.conteiner}>
      <h1>Hello calendar</h1>
      <div className={stl.wrapp}>
        <HeaderBar />
        <ControlBarConteiner />
        <WeekBar />
        <CalendarConteiner />
      </div>
    </div>
  );
};

export default App;