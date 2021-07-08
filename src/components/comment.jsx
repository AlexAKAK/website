import React, { Component } from 'react';
class Comment extends Component {

    divStyle = {
        color: "black",
        outline: "5px dashed gray",
        outlineStyle: "solid",
    }

    authorStyle = {
        color: "black",
        backgroundColor: "gray"
    }

    contentStyle = {
        color: "black",
        backgroundColor: "darkgray"
    }

    


    render() {
        return (
        <div style = {this.divStyle}>
            <h1 style = {this.authorStyle}> {this.props.author}</h1>
            <h2 style = {this.contentStyle}> {this.props.content}</h2>
        </div>
        )
    }
}
 
export default Comment;