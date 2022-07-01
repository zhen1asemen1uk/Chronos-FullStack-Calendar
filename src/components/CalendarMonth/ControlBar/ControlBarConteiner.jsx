import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import moment from 'moment';

import ControlBar from './ControlBar';
import {
	nextMonth,
	prevMonth,
	todayMonth,
} from '../../../reducers/monthReducer/monthReducer';
import stl from './ControlBar.module.css';

const ControlBarConteiner = () => {
	const dispatch = useDispatch();
	const today = useSelector((state) => state.monthState.today);

	const prevHandler = () => {
		dispatch(prevMonth(today.clone().subtract(1, 'month')));
	};

	const todayHandler = () => {
		dispatch(todayMonth(moment()));
	};

	const nextHandler = () => {
		dispatch(nextMonth(today.clone().add(1, 'month')));
	};

	return (
		<div className={stl.wrapp}>
			<ControlBar
				date={today}
				prevHandler={prevHandler}
				todayHandler={todayHandler}
				nextHandler={nextHandler}
			/>
		</div>
	);
};

export default ControlBarConteiner;
