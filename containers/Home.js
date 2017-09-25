import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {
	Row,
	Col
} from 'elemental';

import * as currencyActions from '../actions/currency';
import {
	BASE
} from '../constants';

import {
	CurrencySelect
} from '../components';

class Home extends React.Component {

	componentDidMount() {
		this.props.dispatch(currencyActions.getLatestRates(BASE));
	}

	render () {

		const {rates} = this.props.currencyReducer;

		return (
			<div>
				<Col>
					<Row>
						<Col sm="1/3"></Col>
						<Col sm="1/3">
							<Row>
								<Col sm="1/2">
									<CurrencySelect
										rates={rates}
										/>
								</Col>
								<Col sm="1/2">
									<CurrencySelect
										rates={rates}
										/>
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