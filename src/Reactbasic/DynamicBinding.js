import React from 'react';

export class OuterChild extends React.Component {
  constructor(){
    super();
    this.state={
      fieldValue:'FromOuter'
    };
    console.log("constructor");
  }
  componentWillMount(){
    console.log("componentWillMount");
  }
  componentDidMount(){
    console.log("componentDidMount");
  }
  componentWillReceiveProps(){
    console.log("componentWillReceiveProps");
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate");
  }
  componentWillUpdate(){
    console.log("componentWillUpdate");
  }
  componentDidUpdate(){
    console.log("componentDidUpdate");
  }
  componentWillUnmount(){
    console.log("componentWillUnmount");
  }
  updateFromChild(val){
    console.log('reached');
    this.setState({
      fieldValue:val
    });
  }
  render() {
    return (
      <div>
        <h1>OuterChild</h1>
        fieldValue : {this.state.fieldValue}
        <hr />
        <InnerChild initialParentVal={this.state.fieldValue}
        childVal={this.updateFromChild.bind(this)} />
      </div>
    );
  }
}

export class InnerChild extends React.Component {
  constructor(props) {
    super();
    this.state={
      childLink : props.initialParentVal
    };
  }
  onHandlerChange(event) {
    this.setState({
      childLink:event.target.value
    })
  }
  updateParent(){
    console.log('this.state.childLink:'+this.state.childLink);
    this.props.childVal(this.state.childLink);
  }
  render() {
    return (
      <div>
        <h1>InnerChild</h1>
        <input type="text" value={this.state.childLink} 
        onChange={(event)=>this.onHandlerChange(event)}/>
        <button onClick={this.updateParent.bind(this)}>UpdateParent</button>
      </div>
    );
  }
}
