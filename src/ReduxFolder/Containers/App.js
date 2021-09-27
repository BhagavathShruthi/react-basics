import { List } from '../Components/List';
import { User } from '../Components/User';
import React from 'react';
import { connect } from 'react-redux';

import { SetName } from '../Actions/userActions';
class App extends React.Component {
  render() {
    return (
      <div>
        <List changeUsername={() => this.props.setName('Anna')} />
        <User userName={this.props.user.name} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    math: state.math,
  };
};
const mapDisptachToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(SetName(name));
    },
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(App);
