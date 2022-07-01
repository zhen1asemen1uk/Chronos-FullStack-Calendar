import React from 'react';
import AddEventConteiner from '../Event/AddEvent/AddEventConteiner';
import UpdateEventConteiner from '../Event/UpdateEvent/UpdateEventConteiner';

import stl from './CalendarMonth.module.css';
import ControlBarConteiner from './ControlBar/ControlBarConteiner';
import WeekBar from './WeekBar/WeekBar';

const CalendarMonth = (props) => {
	const { today, isAuth, arrDays, eventDataForMonth, isModalSet } = props;

	return (
		<>
			<ControlBarConteiner />
			<WeekBar />
			<div className={stl.wrapp}>
				{arrDays.map((numDay, i) => {
					const startDay = numDay.clone().startOf('day').format('X');
					const endDay = numDay.clone().endOf('day').format('X');

					const classWeek = () => {
						if (numDay.day() === 0 || numDay.day() === 6) {
							return `${stl.week}`;
						}
						return `${stl.day}`;
					};

					const classNum = () => {
						if (
							numDay.date() === today.date() &&
							numDay.month() === today.month()
						) {
							return `${stl.numToday} ${stl.numDay}`;
						} else if (numDay.month() !== today.month()) {
							return `${stl.numAnotherMonth}  ${stl.numDay}`;
						} else {
							return `${stl.numDay}`;
						}
					};
					const eventsOfDay = () => {
						if (
							eventDataForMonth &&
							typeof eventDataForMonth == 'object'
						) {
							return eventDataForMonth
								.filter(
									(e) =>
										e.date >= startDay && e.date <= endDay
								)
								.map((elem, i) => (
									<li
										key={elem.date + i}
										onClick={() => {
											isModalSet(
												true,
												<UpdateEventConteiner
													idEvent={elem._id}
													tit={elem.title}
													desc={elem.desc}
													dte={elem.date}
												/>
											);
										}}>
										{' '}
										{elem.title}
									</li>
								));
						}
					};

					return (
						<div
							key={numDay.format(`DDMMYYYY${i}`)}
							className={classWeek()}
							onDoubleClick={() => {
								isAuth
									? isModalSet(
											true,
											<AddEventConteiner
												dte={numDay.format(
													`DD.MM.YYYY`
												)}
											/>
									  )
									: alert(`Register pls`);
							}}>
							<div className={classNum()}>
								<div>{numDay.format('D')}</div>
							</div>

							<ul className={stl.events}>{eventsOfDay()}</ul>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default CalendarMonth;
