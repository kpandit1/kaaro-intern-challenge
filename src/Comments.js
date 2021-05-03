import React, { Component } from "react";

export default class Comments extends Component {
  constructor() {
    super();
    this.state = { comments: [], currentComment: '' };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const { url } = this.props;
    fetch(url)
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        this.setState({
          comments: Object.values(data),
        });
      })
      .catch((error) => console.log(error));
  }

  handleInput(e) {
    this.setState({ currentComment: e.target.value });
  }

  handleSubmit(e) {
    const { username, url } = this.props;
    const { currentComment } = this.state;
    fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify({
        text: currentComment,
        username: username,
      }),
    })
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then(() => {
        this.setState((prevState) => ({
          comments: prevState.comments.concat({
            text: currentComment,
            username: username,
          }),
          currentComment: '',
        }));
      })
      .catch((error) => console.log(error));
    e.preventDefault();
  }

  render() {
    const { comments, currentComment } = this.state;

    return (
      <div>
        <ul>
          {comments.map((comment) =>
            <li>
              <a href={`/users/${comment.username}`}>{comment.username}</a>
                : {comment.text}
            </li>
          )}
        </ul>
        <div className="card-action">
          <form className="comment-form" onSubmit={this.handleSubmit}>
            <input type="text" value={currentComment} placeholder="Enter comment here" onChange={this.handleInput} />
          </form>
        </div>
      </div>
    );
  }
}
