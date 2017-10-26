import React, {
    Component
} from 'react'
import PostSummary from './PostSummary'

class PostSummaries extends Component {
    sortByField() {}
    render() {
        return (
            <div>
            <select onChange={this.sortByField()}>
            <option>Score</option>
            <option>Timestamp</option>
            </select>
            {
                this.props.posts.map((post) => (
                    <PostSummary key={post.id} voteScore={post.voteScore} title={post.title} />
                ))
            };
            </div>
        );
    }
}

export default PostSummaries
