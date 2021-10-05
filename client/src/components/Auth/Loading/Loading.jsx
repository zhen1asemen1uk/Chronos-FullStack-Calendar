import React from 'react';

import stl from './Loading.module.css'

const Loading = () => {
   return (
      <div className={stl.loadWrapp}>
         <div className={stl.loader}></div>
      </div>
   );
};

export default Loading;