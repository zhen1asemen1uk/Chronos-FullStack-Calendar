import React from 'react';

import stl from "./Modal.module.css"

const Modal = (props) => {
   const { isModal, isModalSet,children } = props;

   return (
      <div className={
         isModal ? `${stl.modal} ${stl.active}` : stl.modal
      }
         onClick={() => { isModalSet(false) }}>

         <div className={stl.modal_content} onClick={(e) => {
            e.stopPropagation();
         }}>
            {children}
         </div>

      </div>
   );
};

export default Modal;