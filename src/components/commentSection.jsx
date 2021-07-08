import React, { Component } from 'react';
import Comment from "./comment"
class CommentSection extends Component {

    state = {
        comments: [
            {author: 'souse man', content: 'Hello everyone!'},
            {author: 'sus', content: 'among us'},
            {author: 'sus', content: 'among us'},
        ]
    }


    style = {
        color: "gray",
        backgroundColor: "lightblue",
        
    }
 

    render() {
        return (
            <div>
            {this.state.comments.map(commentData => {
                return <Comment author={commentData.author} content={commentData.content} />
            })}
            </div>
        );
    }
}
 
export default CommentSection;