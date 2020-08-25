import React, { Component } from 'react'

export default class Comments extends Component {
  constructor() {
    super();
    this.state = { comments: [], currentComment: '' }
  }
  componentDidMount() {
    // Call REST API here to get comments from database... Hint: use fetch()
    // Put link to fetch documentation here (and stuff from 485)
  }
  render() {
    // Change the static comments to the actual comments from the database
    // HINT: check out the React Docs on forms for help about adding a comment
    return (
      <div>
        <ul>
          <li>
            <a href="/users/mario">mario</a>:
              It's a me
          </li>
          <li>
            <a href="/users/yoshi">yoshi</a>:
                       I commit tax fraud
          </li>
        </ul>

        <form class="comment-form">
          <input type="text" value="" />
        </form>
      </div>
    )
  }
}
