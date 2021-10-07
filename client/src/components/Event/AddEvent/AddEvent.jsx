import React from 'react'

import stl from '../Event.module.css'

const AddEvent = (props) => {
   const { title, setTitle,
      content, setContent,
      date, setDate,
      addEvent } = props;

   return (
      <>
         <div className={stl.addEvent}>
            <input type='text' placeholder="Title event" autoComplete="off"
               name="title" id={stl.title} value={title}
               onChange={e => setTitle(e.target.value)}
               className={`${stl.eventInp} ${stl.title}`} />

            <br />

            <input type='text' placeholder="Description" autoComplete="off"
               name="content" id={stl.content} value={content}
               onChange={e => setContent(e.target.value)}
               className={`${stl.eventInp} ${stl.content}`} />

            <br />

            <input type='text' placeholder="DD.MM.YYYY" autoComplete="off"
               name="date" id={stl.date} value={date}
               onChange={e => setDate(e.target.value)}
               className={`${stl.eventInp} ${stl.date}`} />

            <br />

            {
               date.match(/^([0-9]{2})\.([0-9]{2})\.([0-9]{4})$/) &&
                  content.length > 0 &&
                  title.length > 0 ?
                  <button className={stl.btn} onClick={() => {
                     addEvent(title, content, date);
                  }}>Add</button> :
                  <div>Enter all fields</div>
            }

         </div>
      </>
   )

}
export default AddEvent