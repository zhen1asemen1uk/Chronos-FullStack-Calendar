import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authAPI } from '../../API/authAPI';

import HeaderBar from './HeaderBar';

const HeaderBarConteiner = () => {
   const dispatch = useDispatch();
   const isAuth = useSelector(state => state.authState.isAuth);
   const user = useSelector(state => state.authState.user);

   const [modalActive, setModalActive] = useState(false);
   const [search, setSearch] = useState('');
   const [children, setChildren] = useState('');

   const logout = () => {
      dispatch(authAPI.logout())
   }

   return (
      <>
         <HeaderBar
            modalActive={modalActive} setModalActive={setModalActive}
            search={search} setSearch={setSearch}
            children={children} setChildren={setChildren}
            isAuth={isAuth} logout={logout} user={user} />
      </>)
};

export default HeaderBarConteiner;