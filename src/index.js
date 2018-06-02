import React from 'react'
import ReactDOM from 'react-dom'

import MessageList from './components/MessageList'
import MessageInput from './components/MessageInput'

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			messages: [],
			increment: 0
		}

		this.newMessage = this.newMessage.bind(this)
	}

	newMessage(message){
		const { increment, messages } = this.state
		var areaMessage = document.getElementById('area-message')

		this.setState({
			messages: [
				...messages,
				message
			],
			increment: increment + 1
		})

		const toBottom = areaMessage.scrollHeight * increment
		areaMessage.scrollTo(0, toBottom)
	}

	render() {
		const { messages } = this.state
		return (
			<div className="container" style={{ marginTop: '50px', marginBottom: '50px' }}>
				<div className="row">
					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
						<div className="jumbotron">
							<div className="container">
								<h1>Hi, i am bot!</h1>
								<p>You can chat me anything</p>
							</div>
						</div>
					</div>
					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
						<MessageList messages={messages} />
						<MessageInput newMessage={this.newMessage} />
					</div>					
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('react'))

