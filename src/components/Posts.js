const React = require('react');

class Posts extends React.Component {
  constructor(){
    super();
    this.state = {
      posts: []
    };
    this.api = "https://jsonplaceholder.typicode.com/posts/";
  }

  componentDidMount() {
    fetch(this.api)
      .then(results => {
        return results.json();
      })
      .then(data => {
        let newPosts = data.map(post => {
          return (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <a href="#">Read More</a>
            </div>
          );
        });
        this.setState({ posts: newPosts });
      });
  }

  render(){
    return(
      <section>
        {this.state.posts}
      </section>
    )
  }
}

module.exports = Posts;
