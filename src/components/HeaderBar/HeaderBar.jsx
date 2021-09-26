import React, { useState } from 'react';

import stl from './HeaderBar.module.css';

const HeaderBar = () => {
   const [search, setSearch] = useState('');

   return (
      <div className={stl.wrapp}>

         <div className={stl.oneBTN}>
            <button className={stl.btn}>+</button>
         </div>

         <div className={stl.fourBTN}>
            <button className={stl.btn}>Day</button>
            <button className={stl.btn}>Week</button>
            <button className={stl.btn}>Month</button>
            <button className={stl.btn}>Year</button>
         </div>

         <div className={stl.wrappINP}>
            <input type="search" className={stl.searchINP}
               onChange={(e) => { setSearch(e.target.value) }} 
               value={search}  placeholder="Search"/>
         </div>

      </div>
   );
};

export default HeaderBar;