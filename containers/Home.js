import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {
	Row,
	Col
} from 'elemental';

import Select from 'react-select';

import * as currencyActions from '../actions/currency';
import {
	BASE,
	Countries
} from '../constants';
import {
	generateFlag
} from '../utils';

import {
	InCenter,
	CurrencyOption
} from '../components';

// css

import 'react-select/dist/react-select.css';

class Home extends React.Component {

	componentDidMount() {
		this.props.dispatch(currencyActions.getLatestRates(BASE));
	}

	render () {

		const {rates} = this.props.currencyReducer;

		const newoptions = Countries.map(country => {

			const rate = rates.find(rate => rate.name == country.currency.code);
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
			<div>
				<Col>
					<Row>
						<Col sm="1/3"></Col>
						<Col sm="1/3">
							<Row>
								<Col sm="1/2">
									<Select
									  name="form-field-name"
									  value="one"
									  options={newoptions}
									/>
								</Col>
								<Col sm="1/2">
									<Select
									  name="form-field-name"
									  value="one"
									  optionComponent={CurrencyOption}
									  options={newoptions}
									/>
								</Col>
							</Row>
							<Row>
								<Col>
									<h2>Live Currency Rates</h2>
								</Col>
							</Row>
						</Col>
						<Col sm="1/3"></Col>
					</Row>
				</Col>
			</div>
		)
	}
}

export default connect(state => state)(Home);