import _ from 'lodash';
import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

export default (props) => {

	 const sum = props.data.reduce((currentValue, previousValue) => currentValue + previousValue)
	 const average = (sum / props.data.length).toFixed(0);

	//const average = _.round(_.sum(props.data) / props.data.length);
	
	return (
		<div className="chart">
			<Sparklines data={props.data} width={180} height={120}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			Average: {average} ({props.units})
		</div>
	);
}