import React from 'react';
import { NavLink } from 'react-router-dom';

import AddEventConteiner from '../Auth/Event/AddEventConteiner';
import LoginConteiner from '../Auth/Login/LoginConteiner';
import RegisterConteiner from '../Auth/Register/RegisterConteiner';

import Modal from '../Modal/Modal';
import stl from './HeaderBar.module.css';

const HeaderBar = (props) => {
   const API_URL = process.env.REACT_APP_HOST;
   const { modalActive, setModalActive,
      search, setSearch,
      children, setChildren,
      isAuth, logout, user } = props;


   return (
      <div className={stl.wrapp}>

         <Modal active={modalActive} setActive={setModalActive} children={children} />

         <div className={stl.oneBTN}>
            <button className={stl.btn} onClick={() => {
               setModalActive(true)
               setChildren(<AddEventConteiner />)
            }}>
               +
            </button>
         </div>

         <div className={stl.fourBTN}>
            <NavLink to='/day' className={stl.btn}>Day</NavLink>
            <NavLink to='/week' className={stl.btn} >Week</NavLink>
            <NavLink to='/month' className={stl.btn}>Month</NavLink>
            <NavLink to='/year' className={stl.btn}>Year</NavLink>
         </div>
         <div className={stl.HEIGHT}></div>
         <div className={stl.wrappINP}>

            <input type="search" className={stl.searchINP}
               onChange={(e) => { setSearch(e.target.value) }}
               value={search} placeholder="Search" />
         </div>

         {isAuth ?
            <div className={stl.myIcon}>
               <NavLink to="/user" id={stl.NavlinkForAvatar} >
                  <img src={`${API_URL}/avatar/${user.avatar}`}
                     alt="avatar" className={stl.myAvatar} />
               </NavLink>

               <div className={stl.dropDown}>
                  <NavLink to='/' onClick={() => {
                     logout()
                  }}>logout</NavLink>
               </div>
            </div> :

            <div className={`${stl.auth} ${stl.oneBTN}`}>
               <button className={stl.btn} onClick={() => {
                  setModalActive(true)
                  setChildren(<RegisterConteiner />)
               }}>register</button>
               <button className={stl.btn} onClick={() => {
                  setModalActive(true)
                  setChildren(<LoginConteiner />)
               }}>login</button>

            </div>
         }

      </div>
   );
};

export default HeaderBar;