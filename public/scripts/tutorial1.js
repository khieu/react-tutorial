var data = [
  	{
  		id: 1, 
  		author: "Pete Hunt", 
  		text: "This is one comment"
	},
  	{
  		id: 2, 
  		author: "Jordan Walke", 
  		text: "This is *another* comment"
  	}
];


var CommentForm = React.createClass({
	render: function() {
		return (
			<div className="commentForm">
				A CommentForm
			</div>
		);
	}
});

var CommentList = React.createClass({

	render: function() {
		console.log(this.props.data);
		var commentNodes = this.props.data.map(
				function(comment) {
					console.log(comment.author);
					return (
						<Comment 
							author={comment.author} 
							key={comment.id}
						>
							{comment.text}
						</Comment>
					);
				}
		);

		return (
			<div className="commentList">
				{commentNodes}
			</div>
		);
	}
});

var Comment = React.createClass({

	rawMarkup: function() {
		console.log(this.props.author);
    var rawMarkup = marked(this.props.children.toString());
    
    return { __html: rawMarkup };
  },

	render: function() {
		return (
			<div className="comment">
				<h2>
					{this.props.author}
				</h2>
				<span dangerouslySetInnerHTML={this.rawMarkup()}/>
			</div>
		);
	}

});

var CommentBox = React.createClass({
	render: function() {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.props.data}/>
				<CommentForm />
			</div>);
	}
});

ReactDOM.render(
	<CommentBox data={data} />,
  	document.getElementById('content')
);