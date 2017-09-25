import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {
	Row,
	Col
} from 'elemental';

import {
	AreaChart,
	Area,
	CartesianGrid,
	XAxis,
	YAxis
} from 'recharts';

import Select from 'react-select';

import * as currencyActions from '../actions/currency';

import {
	InCenter,
	CurrencyOption
} from '../components';

// css

import 'react-select/dist/react-select.css';

class Home extends React.Component {

	componentWillReceiveProps(nextProps) {
		console.log(nextProps)
	}

	componentDidMount() {
		this.props.dispatch(currencyActions.getLatestRates());
	}

	render () {

		const data = [
	      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
	      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
	      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
	      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
	      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
	      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
	      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100}
		];

		var options = [
		  { value: {
		  	flag: "https://restcountries.eu/data/usa.svg",
		  	code: 'INR',
		  	name: 'Indian Rupee'
		  }, label: 'One' }
		];

		return (
			<div>
				<InCenter>
					<h1 className="text-center">Currency Compare</h1>
					<AreaChart width={600} height={300} data={data}>
					  <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
					  <CartesianGrid stroke="#ccc" />
					  <XAxis dataKey="name" />
					  <YAxis />
					</AreaChart>
				</InCenter>
				<Col>
					<Row>
						<Col sm="1/3"></Col>
						<Col sm="1/3">
							<Row>
								<Col sm="1/2">
									<Select
									  name="form-field-name"
									  value="one"
									  options={options}
									/>
								</Col>
								<Col sm="1/2">
									<Select
									  name="form-field-name"
									  value="one"
									  optionComponent={CurrencyOption}
									  options={options}
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