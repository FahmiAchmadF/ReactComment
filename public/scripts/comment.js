var Comment = React.createClass({
    rawMarkUp: function() {
        var md = new Remarkable(); 
        var rawMarkUp = md.render(this.props.children.toString());
        return { __html: rawMarkUp };
    },

    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span> {this.props.children} </span>
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function() {
        var commentNodes = this.props.data.map(function(comment) {
            return (
                <Comment author={comment.author} key={comment.id} >
                    {comment.text}
                </Comment>
            );
        });
        
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});