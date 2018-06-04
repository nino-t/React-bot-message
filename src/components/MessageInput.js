import React from 'react';

export default class MessageInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			from: 'Nino',
			message: '',
			me: true
		}

		this.handleOnChange = this.handleOnChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(e){
		e.preventDefault()
		this.props.newMessage(this.state)

		this.setState({
			message: ''
		})
	}

	handleOnChange(e){
		const target = e.target

		this.setState({
			[target.name]: target.value
		});
	}

	render() {
		const { from, message } = this.state
		return (
			<form method="POST" style={{ backgroundColor: '#ecf0f1', padding: '10px'}} onSubmit={this.handleSubmit}>
				<div className="input-group">
			      <input 
			      	type="text" 
			      	name="message"
			      	className="form-control" 
			      	placeholder="Message..." 
			      	value={message}
			      	onChange={this.handleOnChange} />

			      <span className="input-group-btn">
			        <button 
			        	className="btn btn-primary" 
			        	type="submit">
			        		Submit
			        </button>
			      </span>
			    </div>
			</form>						
		)
	}
}
