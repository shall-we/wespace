import React from 'react';
import './message.scss';

export class Message extends React.Component{

	render() {

        const {name, message, align} = this.props;

		return (
			<div className="message clearfix">
				<div className={"bubble " + align}>
					<div className="from">
						{name}
					</div>
					<div className="content">
						{message}
					</div>
				</div>
			</div>
		)
	}
}

export default Message;