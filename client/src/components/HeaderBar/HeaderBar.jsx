import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import stl from './HeaderBar.module.css';

const HeaderBar = (props) => {
   const [search, setSearch] = useState('');

   return (
      <div className={stl.wrapp}>

         <div className={stl.oneBTN}>
            <button className={stl.btn}>+</button>
         </div>

         <div className={stl.fourBTN}>
            <NavLink to='/day' className={stl.btn}>Day</NavLink>
            <NavLink to='/week' className={stl.btn} >Week</NavLink>
            <NavLink to='/month' className={stl.btn}>Month</NavLink>
            <NavLink to='/year' className={stl.btn}>Year</NavLink>
         </div>

         <div className={stl.wrappINP}>

            <input type="search" className={stl.searchINP}
               onChange={(e) => { setSearch(e.target.value) }}
               value={search} placeholder="Search" />
         </div>

      </div>
   );
};

export default HeaderBar;