import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {term: ''};
	}

	onInputChange(event) {
		const term = event.target.value;
		this.setState({term});
	}

	onSubmit(event) {
		event.preventDefault();

		this.props.fetchWeather(this.state.term);
		this.setState({term: ''});
	}

	render() {
		return (
			<div>
				<form className="input-group" onSubmit={this.onSubmit.bind(this)}> 
					<input
						className="form-control"
						placeholder="Enter city name to get next 5 days forecast"
						value={this.state.term} 
						onChange={this.onInputChange.bind(this)}/>
					<span className="input-group-btn">
						<button type="submit" className="btn btn-secondary">Submit</button>
					</span>
				</form>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchWeather}, dispatch);
}


export default connect(null, mapDispatchToProps)(SearchBar);