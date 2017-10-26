import React, { Component } from 'react';
import './App.css';
import PostSummaries from './components/PostSummaries'

class App extends Component {
  state = {
    posts: [],
    categories: [],
  }
  createPost() {
  }
  goToCategory() {
  }
  componentDidMount() {
    fetch('http://localhost:3001/posts', {
      method: 'GET',
        headers: { 'Authorization': 'whatever-you-want' }
    }).then((response) => {
      //response.json()
      this.setState({posts: response.json()})
    })

    fetch('http://localhost:3001/categories', {
      method: 'GET',
        headers: { 'Authorization': 'whatever-you-want' }
    }).then((response) => {
      //response.json()
      this.setState({categories: response.json()})
    })
  }
  render() {
    const { categories, posts} = this.state
    return (
      <div>
        <select onChange={this.goToCategory}>
        {categories.map((category) => (
            <option key={category.id} value={category.id}>{category.title}</option>
        ))}
        </select>

        <button onClick={this.createPost}>Create Post</button>

        <PostSummaries posts={posts} />

      </div>
    );
  }
}

export default App;
