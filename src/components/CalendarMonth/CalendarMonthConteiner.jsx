import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { eventAPI } from '../../API/eventAPI';
import {
	isModal_Auth,
	modalChildren_Auth,
} from '../../reducers/authReducer/authReducer';
import CalendarMonth from './CalendarMonth';

const CalendarMonthConteiner = () => {
	const dispatch = useDispatch();

	const user = useSelector((state) => state.authState.user);
	const isAuth = useSelector((state) => state.authState.isAuth);
	const today = useSelector((state) => state.monthState.today);
	const eventDataForMonth = useSelector(
		(state) => state.eventState.eventDataForMonth
	);

	const weekStartDay = today.clone().startOf('month').startOf('week');

	//for calculate day current month
	const monthStartDay = today.clone().startOf('month').format('X');
	const monthEndDay = today.clone().endOf('month').format('X');

	let day = weekStartDay.clone().subtract(1, 'day');

	const isModalSet = (set, child) => {
		dispatch(isModal_Auth(set));
		dispatch(modalChildren_Auth(child));
	};

	useEffect(() => {
		if (user.id !== undefined) {
			const getEventsInMonth = (user_id, gte, lte) => {
				dispatch(eventAPI.getEventByUserIDAndTime(user_id, gte, lte));
			};

			getEventsInMonth(user.id, monthStartDay, monthEndDay);
		}
	}, [today, user.id, monthStartDay, monthEndDay, dispatch]);

	const arrDays = [...Array(42)].map(() => {
		return day.add(1, 'day').clone();
	});

	return (
		<CalendarMonth
			today={today}
			isAuth={isAuth}
			arrDays={arrDays}
			eventDataForMonth={eventDataForMonth}
			isModalSet={isModalSet}
		/>
	);
};

export default CalendarMonthConteiner;
