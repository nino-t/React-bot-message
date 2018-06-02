import React from 'react';

import Message from './Message'

export default class MessageList extends React.Component {
	render() {
		const { messages } = this.props
		return (
			<div className="panel panel-default" style={{ marginBottom: '0px' }}>
				<div className="panel-heading">
					<h3 className="panel-title">Chat Box</h3>
				</div>
				<div id="area-message" className="panel-body" style={{ height: '450px', overflowY:'scroll'}}>
					{
						messages.map((message, index) => (
							<Message key={index} message={message} />
						))
					}
				</div>
			</div>
		)
	}
}
