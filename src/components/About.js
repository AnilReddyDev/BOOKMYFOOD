import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log(`parent constructor called : `);
  }

  componentDidMount() {
    //it is used for api calls
    console.log(`parent componentDidMount called : `);
    this.setState({
      count: this.state.count + 1,
    });
  }
  componentDidUpdate() {
    console.log(`parent componentDidUpdate called : `);
  }

  render() {
    console.log(`parent render called : `);
    return (
      <div>
        <h1>About</h1>
        <p>Count : {this.state.count}</p>
        <UserClass propsname="First" />
      </div>
    );
  }
}

export default About;
