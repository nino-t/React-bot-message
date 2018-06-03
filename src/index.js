import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

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

	componentWillMount() {
		axios({
			method:'get',
			url:'https://snatchbot.me/channel/api/id19475/appdino20180603/apsdino03062018?user_id=12345',
			responseType:'json'
		})
		.then((response) => {
			const messages = response.data.messages
			const data = []

			messages.map((message, index) => {
				if (message.message !== '') {
					data.push(message)
				}
			})
			this.setState({
				messages: data
			})

			console.log(data)
		})
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

		this.sendMessage(message.message)
		const toBottom = areaMessage.scrollHeight * increment
		areaMessage.scrollTo(0, toBottom)
	}

	sendMessage(message){
		axios({
			method: 'post',
			url: 'https://snatchbot.me/channel/api/id19475/appdino20180603/apsdino03062018',
			data: {
				message: message,
				user_id: 12345
			}
		})
		.then((response) => {
			const { messages, cards } = response.data

			var responMessages = []
			messages.map((message, index) => {
				var data = {
					from: 'Dinobot',
					message: message
				}

				responMessages.push(data)
			})			

			cards.map((card, index) => {
				var data = {
					from: 'Dinobot',
					type: 'gallery',
					gallery: card.gallery
				}

				responMessages.push(data)
			})						

			console.log(response)
			var results = this.state.messages.concat(responMessages)
			this.setState({
				messages: results
			})
		})		
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
								<p>You can chat me anytime</p>
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

