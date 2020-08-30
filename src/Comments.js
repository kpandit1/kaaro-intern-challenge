import React, { Component } from "react";

export default class Comments extends Component {
  constructor() {
    super();
    this.state = { comments: [], currentComment: "" };
  }
  componentDidMount() {
    // Call REST API here to get comments from database... Hint: use fetch()
    // Put link to fetch documentation here (and stuff from 485)
  }
  render() {
    // Change the static comments below to the actual comments from the database
    // HINT: check out the React Docs on forms for help with adding a comment
    return (
      <div>
        <ul>
          <li>
            <a href="/users/mario">mario</a>: It's a me
          </li>
          <li>
            <a href="/users/yoshi">yoshi</a>: I commit tax fraud
          </li>
        </ul>
        <div className="card-action">
        <form className="comment-form">
          <input type="text" value="" placeholder="Enter comment here" />
        </form>
        </div>
      </div>
    );
  }
}
