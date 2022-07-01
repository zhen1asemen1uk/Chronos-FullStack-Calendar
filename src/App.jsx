import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import HeaderBarConteiner from './components/HeaderBar/HeaderBarConteiner';
import AppRouter from './components/AppRouter';
import { authAPI } from './API/authAPI';
import stl from './style/App.module.css';

const App = () => {
	const store = useSelector((store) => store);

	//for true auth status
	if (
		localStorage.getItem(`token`) &&
		localStorage.getItem(`token`) !== 'undefined'
	) {
		store.authState.isAuth = true;
	}

	//for save avatar after refresh page
	if (
		localStorage.getItem(`userData`) &&
		localStorage.getItem(`userData`) !== 'undefined'
	) {
		const obj = JSON.parse(localStorage.getItem(`userData`));
		store.authState.user = obj;
	}

	useEffect(() => {
		if (localStorage.getItem(`token`)) {
			authAPI.checkAuth();
		}
	}, [store]);

	return (
		<div className={stl.conteiner}>
			<h1>Hello calendar</h1>
			<div className={stl.wrapp}>
				<HeaderBarConteiner />

				<AppRouter />
			</div>
		</div>
	);
};

export default App;
