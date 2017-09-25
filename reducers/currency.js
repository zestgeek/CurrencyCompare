import * as types from '../actions/actionTypes';

const initState = {
	rates: [],
	loading: false
}

const currencyReducer = (state = initState, action = {}) => {

	const {type, payload} = action;

	switch (type) {

		case types.SET_CURRENCY_LOADING :
			return {...state, loading: payload}
		case types.SET_CURRENCY_RATES :
			return {...state, rates: payload}
		default :
			return state

	}

}

export default currencyReducer;