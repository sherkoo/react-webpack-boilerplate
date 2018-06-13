const React = require('react');
const gearData = require('../../data/gear.json');
const API = [{title: "This is a test title", id: 0}, {title: "other title", id: 2}, {title: "yes!", id: 4}];

class Gear extends React.Component {
  constructor(){
    super();
    this.words = API;
    let wordArr = [];
  }

  componentDidMount(){
    const wordArr = this.words.map((val, index, arr) => {
      // return element to new Array
      return(
        <div>
          <h2>{val.title}</h2>
          <p>id: {val.id}</p>
        </div>
      );
    });
  }

  render(){
    return(
      <div>
        {this.wordArr}
      </div>
    )
  }
}

module.exports = Gear;
