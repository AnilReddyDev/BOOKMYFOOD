import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userdata: {
        name: "Dummy",
        location: "chennai",
        avatar_url: "dkudkjdkjkdjk",
      },
    };
    console.log(`child constructor called : ` + this.props.propsname);
  }

  async componentDidMount() {
    console.log(`child componentDidMount called : ` + this.props.propsname);
    const data = await fetch("https://api.github.com/users/anilreddydev");
    const json = await data.json();
    this.setState({ userdata: json });
  }

  componentDidUpdate() {
    console.log(`child componentDidUpdate called : ` + this.props.propsname);
  }

  render() {
    const { count } = this.state;
    const { name, location, avatar_url, bio } = this.state.userdata;

    console.log(`child render called : ` + this.props.propsname);
    return (
      <div className="user-container">
        {/* <h1>Count : {count}</h1> */}
        {/* <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
          style={{ width: "50px" }}
        >
          Count
        </button> */}
        <img
          style={{ width: "100px", height: "100px" }}
          src={avatar_url}
          alt="img"
        />
        <h3>Name : {name}</h3>
        <h3>Location: {location}</h3>
        <h3>Bio: {bio}</h3>
      </div>
    );
  }
}

export default UserClass;
