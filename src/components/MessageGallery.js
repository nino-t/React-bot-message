import React from 'react';

export default class MessageGallery extends React.Component {
	render() {
		const { gallery } = this.props
		return (
			<div style={{ backgroundColor: '#ecf0f1' }}>
				<div>
					<center>
						<img src={gallery.image} className="img-responsive" />
						<h3>{gallery.heading}</h3>

						<button className="btn btn-primary" style={{ width: '100%' }}>{gallery.subtitle}</button>
					</center>
				</div>
			</div>
		)
	}
}
