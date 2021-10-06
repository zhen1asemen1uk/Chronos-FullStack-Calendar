import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authAPI } from '../../API/authAPI';
import { isModal_Auth, modalChildren_Auth } from '../../reducers/authReducer/authReducer';

import HeaderBar from './HeaderBar';

const HeaderBarConteiner = () => {
   const dispatch = useDispatch();
   const isAuth = useSelector(state => state.authState.isAuth);
   const user = useSelector(state => state.authState.user);
   const isModal = useSelector(state => state.authState.isModal);
   const modalChildren = useSelector(state => state.authState.modalChildren);

   const [search, setSearch] = useState('');

   const logout = () => {
      dispatch(authAPI.logout())
   }

   const isModalSet = (set, child) => {
      dispatch(isModal_Auth(set))
      dispatch(modalChildren_Auth(child))
   }


   return (
      <>
         <HeaderBar
            isModal={isModal} isModalSet={isModalSet}
            search={search} setSearch={setSearch}
            modalChildren={modalChildren}
            isAuth={isAuth} logout={logout} user={user} />
      </>)
};

export default HeaderBarConteiner;