/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   En este archivo se demuestra como crear un 'store' de Redux.
 *
 *
 * IMPORTANTE:
 *  			  - <createStore> = Me permite crear el 'store' de Redux.
-------------------------------------------------------------------------- */

import React from 'react';
import ReactDOM from 'react-dom/client';

import { createStore } from 'redux';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore((state = 0, action) => {
	switch (action.type) {
		case 'set':
			return action.payload;

		case 'increase':
			return state + 1;

		case 'decrease':
			return state - 1;

		default:
			return state;
	}
});

store.dispatch({ type: 'lala' });
console.log(store.getState());

store.dispatch({ type: 'increase' });
console.log(store.getState());

store.dispatch({ type: 'decrease' });
console.log(store.getState());

store.dispatch({ type: 'set', payload: 15 });
console.log(store.getState());

root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
