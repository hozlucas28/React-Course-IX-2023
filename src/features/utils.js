export const mac =
	(type, ...argNames) =>
	(...args) => {
		const action = { type };
		argNames.forEach((arg, index) => {
			action[argNames[index]] = args[index];
		});

		return action;
	};

export const mat = (entity) => [
	`${entity}/pending`,
	`${entity}/fulfilled`,
	`${entity}/rejected`
];

export const asycMac = (asyncTypes) => [
	mac(asyncTypes[0]),
	mac(asyncTypes[1], 'payload'),
	mac(asyncTypes[2], 'error')
];

const initialFetching = { loading: 'idle', error: null };

export const makeFetchingReducer =
	(actions) =>
	(state = initialFetching, action) => {
		switch (action.type) {
			case actions[0]:
				return { ...state, loading: 'pending' };

			case actions[1]:
				return { ...state, loading: 'succeed' };

			case actions[2]:
				return { loading: 'rejected', error: action.error };

			default:
				return state;
		}
	};

export const makeSetReducer =
	(actions) =>
	(state = 'all', action) => {
		switch (action.type) {
			case actions[0]:
				return action.payload;

			default:
				return state;
		}
	};

export const reduceReducers =
	(...reducers) =>
	(state, action) =>
		reducers.reduce((acc, el) => el(acc, action), state);

export const makeCrudReducer =
	(actions) =>
	(state = [], action) => {
		switch (action.type) {
			case actions[0]:
				return state.concat({ ...action.payload });

			case actions[1]:
				const newEntities = state.map((entity) => {
					if (entity.id === action.payload.id) {
						return { ...entity, completed: !entity.completed };
					}
					return entity;
				});

				return newEntities;

			default:
				return state;
		}
	};
