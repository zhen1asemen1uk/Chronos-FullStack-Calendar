import React from 'react';
import stl from "./Modal.module.css"

const Modal = (props) => {
   const { active, setActive, children } = props;

   return (
      <div className={
         active ? `${stl.modal} ${stl.active}` : stl.modal
      }
         onClick={() => { setActive(false) }}>

         <div className={stl.modal_content} onClick={(e) => {
            e.stopPropagation();
         }}>
            {children}
         </div>

      </div>
   );
};

export default Modal;