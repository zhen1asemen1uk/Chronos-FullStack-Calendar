import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { eventAPI } from '../../../API/eventAPI';
import AddEvent from './AddEvent';

const AddEventConteiner = () => {
   const dispatch = useDispatch();

   const [title, setTitle] = useState("");
   const [content, setContent] = useState("");
   const [date, setDate] = useState("");

   const addEvent = (title, content, date) => {
      if (date.match(/^([0-9]{2})\.([0-9]{2})\.([0-9]{4})$/)) {
         dispatch(eventAPI.addEvent(title, content, date))
         console.log(1);
      } else {
         let error = 'Error format date.\nTrue format:DD.MM.YYYY';
         console.log(2);
      }

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