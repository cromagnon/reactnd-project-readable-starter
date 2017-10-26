import React, { Component } from 'react'

class PostSummary extends Component {
  plusVote = () => {
    console.log("plusVote clicked.")
  }
  minusVote = () => {
    console.log("minusVote clicked.")
  }
  render() {
    return (
    <div>
      <button onClick={() => this.plusVote()}>
      Plus
    </button>

      <button onClick={() => this.minusVote()}>
      Minus
    </button>
      <span>{this.props.title}</span>
      <div>{this.props.voteScore}</div>
    </div>
    )
  }
}

export default PostSummary
