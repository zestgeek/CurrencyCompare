import React from 'react';
import Select from 'react-select';

import {
	CurrencyOption
} from './';

import {
	Countries
} from '../constants';

import {
	generateFlag
} from '../utils';


const CurrencySelect = (props) => {

	const options = Countries.map(country => {

		const rate = props.rates.find(rate => rate.name == country.currency.code);
		const newCountry = {
			flag: generateFlag(country.code),
			code: country.currency.code,
			name: country.currency.name,
			value: rate && rate.value
		}

		return {
			value: newCountry,
			label: newCountry.code
		}

	})
	
	return (
		<Select
			{...props}
			options={options}
			optionComponent={CurrencyOption}
		/>
	)
}

export default CurrencySelect;