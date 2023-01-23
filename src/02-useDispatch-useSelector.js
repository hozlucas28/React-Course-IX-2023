/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   En este archivo se demuestra el uso del <useDispatch> y
 * 		   el <useSelector>.
 *
 *
 * IMPORTANTE:
 *  			  - <useDispatch> = Me permite despachar hacia el 'store'.
 *  			  - <useSelector> = Me permite acceder al estado del 'store'.
-------------------------------------------------------------------------- */

import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

// Reducer del 'store' de Redux - [ MALA PRÁCTICA TENERLO EN APP.js ]
export const reducer = (state = 0, action) => {
	console.log({ state, action });

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
};

function App() {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();
	const state = useSelector((state) => state);

	const set = () => {
		dispatch({ type: 'set', payload: value });
		setValue('');
	};

	return (
		<div>
			<p>Contador: {state}</p>
			<button onClick={set}>Setear</button>
			<button onClick={() => dispatch({ type: 'increase' })}>
				Incrementar
			</button>
			<button onClick={() => dispatch({ type: 'decrease' })}>
				Decrementar
			</button>
			<input
				value={value}
				onChange={(e) => setValue(Number(e.target.value))}
			/>
		</div>
	);
}

export default App;
