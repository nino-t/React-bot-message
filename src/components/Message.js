import React from 'react';
import Swiper from 'react-id-swiper'

import MessageGallery from './MessageGallery'

export default class Message extends React.Component {
	render() {
		const { message } = this.props
		let username = message.from
		let galeries = []

		let pull = 'pull-left'
		let src = './assets/robot.png'		

		if (message.from == 'botsApiChannel:') {
			username = 'Dinobot'
		}

		if (message.gallery) {
			galeries = message.gallery
		}

		if (message.me) {
			pull = 'pull-right'
			src = './assets/me.png'
		}

		const params = {
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		}		

		return (
			<div>
				<div className={pull} style={{ width: '14%', padding: '10px'}}>
					<img src={src} width="50" />
				</div>

				{
					galeries.length <= 0 ? 
					<div className={pull} style={{ width: '60%', backgroundColor: '#ecf0f1', padding: '8px', marginTop: '10px'}}>
						<b>{username}</b>
						<p>{message.message}</p>
						<div>
							<Swiper {...params}>
								{
									galeries.map((gallery, index) => (
										<div key={index} style={{ padding: '0px 50px', width: '100%'}}>
											<MessageGallery gallery={gallery} />
										</div>
									))
								}
							</Swiper>				
						</div>
					</div>
					: 
					<div className={pull} style={{ width: '60%', backgroundColor: '#ecf0f1', padding: '8px', marginTop: '10px'}}>
						<b>{username}</b>
						<div style={{ marginTop: '10px' }}>
							<Swiper {...params}>
								{
									galeries.map((gallery, index) => (
										<div key={index} style={{ padding: '0px 50px', width: '100%'}}>
											<MessageGallery gallery={gallery} />
										</div>
									))
								}
							</Swiper>				
						</div>
					</div>					
				}
				<div className="clearfix"></div>
			</div>
		)
	}
}
