import * as React from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

interface IHomeState {
  userName: string;
  password: string;
}

class Home extends React.Component<IHomeState> {
  constructor(props: any) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    };
    // this.handleUserNameChange = this.handleUserNameChange.bind(this);
  }
  // input event handlers
  // handleUserNameChange = event => {
  //   this.setState({ userName: event.target.value });
  // };

  render() {
    return <div>Home</div>;
  }
}
export default Home;
