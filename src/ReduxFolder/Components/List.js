import React from 'react';
export class List extends React.Component {
  render() {
    return (
      <div>
        <h1>List Page</h1>
        <button onClick={() => this.props.changeUsername()}>ChangeUser</button>
      </div>
    );
  }
}
