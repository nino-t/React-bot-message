import React from 'react';

export default class Message extends React.Component {
	render() {
		const { message } = this.props
		return (
			<div className="well">
				<b>{message.name}</b>
				<p>{message.message}</p>
			</div>
		)
	}
}
