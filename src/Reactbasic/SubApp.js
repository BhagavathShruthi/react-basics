import React from 'react';
import PropTypes from 'prop-types';
export class SubApp extends React.Component {
  newElement = {
    id: 3,
    name: 'sam',
    age: 28,
    hobbies: ['swimming']
  };
  componentVar = 0;
  constructor(props) {
    super();
    this.state = {
      copyFromSource: props.userDetail
    };
  }
  addNew() {
    this.setState({
      copyFromSource: [...this.state.copyFromSource, this.newElement]
    });
    console.log('addNew' + this.state.copyFromSource);
  }
  updateVar() {
    this.componentVar += 1;
    console.log(this.componentVar);
    this.forceUpdate();
  }
  talkToParent() {
    this.props.VarFromChild('Updated');
  }
  render() {
    console.log('render' + this.state.copyFromSource);
    return (
      <div className="box">
        <h1>Child element</h1>
        <button onClick={this.talkToParent.bind(this)}>
          Pass value to parent
        </button>
        <br />
        Data set:
        <ul>
          {this.state.copyFromSource.map((item, i) => (
            <li key={i}>
              {item.id} | {item.name} | {item.age}
            </li>
          ))}
        </ul>
        <br />
        Data source : {this.props.DataSource}
        <br />
        <button onClick={this.addNew.bind(this)}>
          Click to add an element
        </button>
        <br />
        componentVar : {this.componentVar}
        <br />
        <button onClick={this.updateVar.bind(this)}>Click to update var</button>
        <br />
        <button onClick={this.props.Talk}>Talk to Parent</button>
        <br />
      </div>
    );
  }
}