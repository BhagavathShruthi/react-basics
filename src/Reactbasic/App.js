import React from 'react';
import './style.css';
import { SubApp } from './SubApp';

export class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      ParentValue: 'Initial',
    };
  }
  //voice from children
  voiceFromChild() {
    console.log('reached');
    alert('Parent App received a msg from child SubApp');
  }
  updateParentValue(val) {
    this.setState({
      ParentValue: val,
    });
  }
  render() {
    var data = [
      {
        id: 1,
        name: 'bob',
        age: 25,
        hobbies: ['reading', 'dancing'],
      },
      {
        id: 2,
        name: 'john',
        age: 26,
        hobbies: ['singing', 'riding'],
      },
    ];
    return (
      <div className="box">
        <h1>Parent element</h1>
        <div>
          {data.map((item, i) => (
            <li key={i}>{item.id}</li>
          ))}
        </div>
        <div>{this.state.ParentValue}</div>
        <SubApp
          userDetail={data}
          DataSource={'App'}
          Talk={this.voiceFromChild}
          VarFromChild={this.updateParentValue.bind(this)}
        />
      </div>
    );
  }
}

export const StatelessComp = (props) => {
  return (
    <div className="box">
      <h1>StatelessComp</h1>
    </div>
  );
};
