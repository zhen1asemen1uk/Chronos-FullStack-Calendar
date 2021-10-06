import moment from 'moment';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { eventAPI } from '../../API/eventAPI';
import AddEvent from './AddEvent';

const AddEventConteiner = () => {
   const dispatch = useDispatch();

   const [title, setTitle] = useState("");
   const [content, setContent] = useState("");
   const [date, setDate] = useState(moment().format("DD.MM.YYYY"));

   const addEvent = (title, content, date) => {
      dispatch(eventAPI.addEvent(title, content, date))
   }

   return (<AddEvent
      addEvent={addEvent}
      title={title}
      content={content}
      date={date}
      setTitle={setTitle}
      setContent={setContent}
      setDate={setDate} />
   )

}
export default AddEventConteiner