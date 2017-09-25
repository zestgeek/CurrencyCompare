import React from 'react';

const CurrencyOption = (props) => {
	
	const {value} = props.option;

	const style = {
		borderRadius: '50%',
		marginRight: 10
	}

	const optionStyle = {
		padding: 5
	}

	const textStyle = {
		fontSize: 14,
		verticalAlign: 'middle'
	}

	return (
		<div
			style={optionStyle}>
			<img
				style={style}
				src={value.flag}
				width={20}
				height={20}/>
			<span
				style={textStyle}>
				{value.name && value.name.toUpperCase()} (<b>{value.code}</b>)
			</span>
		</div>
	)
}

export default CurrencyOption;