import * as types from './actionTypes';

import {
	actionCreator
} from '../utils';

import {
	getLatestRatesAPI
} from '../api/currency';

export const setCurrencyLoading = actionCreator(types.SET_CURRENCY_LOADING)
export const setCurrencyRates = actionCreator(types.SET_CURRENCY_RATES)

export const getLatestRates = (base) => {

	return dispatch => {

		dispatch(setCurrencyLoading(true))

		getLatestRatesAPI(base && {base})
			.then(res =>
				dispatch(setCurrencyRates(res)))

	}

}