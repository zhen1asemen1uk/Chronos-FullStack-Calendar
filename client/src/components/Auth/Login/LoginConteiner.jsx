import React, {useState}from 'react';
import { useDispatch, useSelector } from "react-redux";

import { authAPI } from '../../../API/authAPI';
import { eventAPI } from '../../../API/eventAPI';

import Loading from '../Loading/Loading';
import Login from './Login';

const LoginConteiner = () => {
   const dispatch = useDispatch();

   const authState = useSelector(state => state.authState);
   const isLoading = useSelector(store => store.authState.isLoading);

   const [modalActive, setModalActive] = useState(false);
   const [children, setChildren] = useState('');

   const sendLoginData = (login, password) => {
      dispatch(authAPI.login(login, password));
      dispatch(eventAPI.getAllEvents());
   }

   return (<>
      {authState.isAuth ?
         isLoading === true ? <Loading /> : <h3>Welcome {authState.user.login}</h3> :
         isLoading === true ? <Loading /> : <Login
            authState={authState} sendLoginData={sendLoginData}
            modalActive={modalActive} setModalActive={setModalActive}
            children={children} setChildren={setChildren} />}
   </>)
};

export default LoginConteiner;