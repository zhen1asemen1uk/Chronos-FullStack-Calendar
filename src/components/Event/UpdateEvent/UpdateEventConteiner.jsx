import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { eventAPI } from '../../../API/eventAPI';
import UpdateEvent from './UpdateEvent';

const UpdateEventConteiner = (props) => {
	const { idEvent, tit, desc, dte } = props;

	const dispatch = useDispatch();

	const [title, setTitle] = useState(tit);
	const [content, setContent] = useState(desc);
	const [date, setDate] = useState(moment.unix(dte).format('DD.MM.YYYY'));

	const updateEvent = (title, content, date) => {
		dispatch(eventAPI.updateEvent(idEvent, title, content, date));
	};
	const deleteEvent = () => {
		dispatch(eventAPI.deleteEvent(idEvent, date));
	};

	return (
		<UpdateEvent
			updateEvent={updateEvent}
			title={title}
			setTitle={setTitle}
			content={content}
			setContent={setContent}
			date={date}
			setDate={setDate}
			idEvent={idEvent}
			deleteEvent={deleteEvent}
		/>
	);
};

export default UpdateEventConteiner;
