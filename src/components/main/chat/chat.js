import React from "react";
import './chat.scss';
import Message from './message';

class ChatBox extends React.Component{
 
    // enter 기능 안넣음
    handleSendMessage = (event) => {
        if(event.key === 'Enter') {
            // enter 기능추가
        }
    }

	render() {

        const { messages = [{name: '임', message : '됨?'},{name :'채', message: 'test'}]} = this.props;

		return (
			<div className="chat-box">
				<div className="messages-wrapper">
				{
					messages.map((item) => (
                        // 현재사용자와 채팅 id를 비교해서 왼오 나눔 
                        (item.userId === item.messageId) ? (
						    <Message align={'right'} name={item.name} message={item.message}/>
                        ) : (
                            <Message align={'left'} name={item.name} message={item.message}/>
                        )
					))
				}
				</div>
				<input type="text" id="message" className="message-input" placeholder="Send a message" onKeyDown={(e) => this.handleSendMessage()}/>
			</div>
		)
	}
}
export default ChatBox;