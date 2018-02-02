import React, {Component} from 'react';
import {connect} from 'react-redux';

import Sparkline from '../components/sparkline';
import GoogleMap from '../components/google_map';

import GoogleMapReact from 'google-map-react';


class WeatherList extends Component {
	

	renderWeather(cityData) {
		const name = cityData.city.name
		const temperatureData = cityData.list.map(item => item.main.temp);
		const pressureData = cityData.list.map(item => item.main.pressure);
		const humidityData = cityData.list.map(item => item.main.humidity);
		
		const lat = cityData.city.coord.lat;
		const lng = cityData.city.coord.lon;


//<td className="google-map"><GoogleMapReact defaultCenter={center} defaultZoom={ 12 } /></td>		
		const center = {
			lat: lat,
			lng: lng
		};

		return (
			<tr key={name}>
				<td className="google-map"><GoogleMap lat={lat} lng={lng} /></td>
				<td><Sparkline data={temperatureData} color="red" units="K" /></td>
				<td><Sparkline data={pressureData} color="blue" units="Pa" /></td>
				<td><Sparkline data={humidityData} color="green" units="H"/></td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (Pa)</th>
						<th>Humidity (H)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		)
	}
}

function mapStateToProps({weather}) {
	return {weather};
}

export default connect(mapStateToProps)(WeatherList);