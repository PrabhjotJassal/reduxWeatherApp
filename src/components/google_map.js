import React, {Component} from 'react';

class GoogleMap extends Component {
	componentDidMount() {
		new google.maps.Map(this.refs.maps, {
			zoom: 12,
			center: new google.maps.LatLng(this.props.lat, this.props.lng)
		});
	}

	render() {
		return <div className="google-map" ref="maps" />;
	}
}

export default GoogleMap;