const React = require('react');
const ReactDOM = require('react-dom');
const Header = require('./components/Header');
const Posts = require('./components/Posts');
const Gear = require('./components/Gear');

class App extends React.Component {
  constructor(){
    super();
    this.words = [{id:0,title:"first title"},{id:1,title:"second title"}]
  }

  getPosts(){
    return this.words.map((val, index, arr) => {
      return(
        <div key={index}>
          <h2>{val.title}</h2>
          <p>id: {val.id}</p>
        </div>
      );
    });
  }

  render() {
    return(
      <div>
        <Header />
        {this.getPosts()}
        <Gear />
        <h2>
        {this.props.name}
        </h2>
      </div>
    );
  }
}

ReactDOM.render(
  <App name="test"/>,
  document.getElementById('app')
);
