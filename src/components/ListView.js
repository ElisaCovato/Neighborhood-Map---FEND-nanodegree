import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/ListView.css';

// This component deals with the list of locations that appears uder the search bar 
export default class ListView extends Component {
	render() {
		const {markers, selectedLocation, onLocationClick} = this.props
		return (
			<ul className="ListView">
				{markers.map( marker => {
					const selectedClassName = (marker === selectedLocation) ? ' ListView-item-selected' : ''
					return (
						<li key={marker.place}
							className={`ListView-item${selectedClassName}`}>
							<button className="ListView-button" type="button" onClick={() => onLocationClick(marker)}>
								{marker.place}
							</button>
						</li>
					);
				})}
			</ul>
		);
	}
}

ListView.propTypes = {
	markers: PropTypes.array,
	selectedLocation: PropTypes.object,
	onLocationClick: PropTypes.func,
}