import * as React from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

interface IHomeState {
  userName: string;
  password: string;
  boxes: Array<any>;
}

class Home extends React.Component<IHomeState> {
  constructor(props: any) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    };
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
  }
  // input event handlers
  handleUserNameChange = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ userName: event.currentTarget.value });
  };

  render() {
    return (
      <div>
        Home
        <input onChange={this.handleUserNameChange} />
      </div>
    );
  }
}
export default Home;
