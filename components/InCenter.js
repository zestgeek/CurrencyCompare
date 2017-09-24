import React from 'react';

const centerStyle = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center'
}

const InCenter = ({children}) => <div style={centerStyle}>{children}</div>

export default InCenter;