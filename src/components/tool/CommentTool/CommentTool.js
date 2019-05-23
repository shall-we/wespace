import React, { Component } from 'react';
import styles from './CommentTool.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Comment=(props)=>{
    return (
        <div className="comment" id={"comment_" + props.id}>
            <b>{props.author}</b><br/>
            <span dangerouslySetInnerHTML={{ __html : props.children }} ></span>
        </div>
    );
}

const CommentList =(props)=>{
    const commentNodes = props.data.map(function(comment){
        return (
            <Comment id={comment.id} author={comment.author}>{comment.text}</Comment>
        ); 
    });
        return (
            <div className="comment-list">
                { commentNodes }
            </div>
        )
}

class CommentForm extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            author: '',
            text: ''
        }
    }
    handleAuthorChange=(e)=>{
        this.setState({author: e.target.value});
    }
    handleTextChange=(e)=>{
        this.setState({text: e.target.value});
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.commentSubmitHandler({
            id: 128,
            author: this.state.author,
            text: this.state.text
        });
        
        this.setState({author: this.state.author , text: ''});
    }

    render(){
        return (
            <div className="comment-form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.author} placeholder="Your name" onChange={this.handleAuthorChange} /><br/>
                    <input value={this.state.text} placeholder="Your thoughts" onChange={this.handleTextChange} /><br/>
                    <button type="submit">Send</button>
                </form>
            </div>
        );
    }
}


class CommentTool extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            data: this.props.data
        }
    }
    handleCommentSubmit=(comment)=>{
        const data = this.state.data.concat(comment); 
        this.setState({data: data});
    }

    render(){
        const {data=[]}=this.state;
        return (
            <div className="comment-tool">
                <CommentList data={data} />
                <CommentForm commentSubmitHandler={this.handleCommentSubmit}/>
            </div>
        )
    }
}

export default CommentTool;