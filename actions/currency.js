import * as types from './actionTypes';

import {
	actionCreator
} from '../utils';

import {
	getLatestRatesAPI
} from '../api/currency';

export const setCurrencyLoading = actionCreator(types.SET_CURRENCY_LOADING)
export const setCurrencyRates = actionCreator(types.SET_CURRENCY_RATES)

// convert rates from object to array

const normaliseRates = (data) => {
	const currency_list = [];

    currency_list.push({
      name: data.base,
      value: 1
    });

    for(const rate in data.rates) {
      currency_list.push({
        name: rate,
        value: data.rates[rate]
      });
    }

    return currency_list;
}

export const getLatestRates = (base) => {

	return dispatch => {

		dispatch(setCurrencyLoading(true))

		getLatestRatesAPI(base && {base})
			.then(res =>
				dispatch(setCurrencyRates(normaliseRates(res))))

	}

}