import React from "react";
import "./User.css";

class UserClassBaseComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userinfo: {
        name: "dummy",
        location: "default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/prmd04");
    const json = await data.json();

    this.setState({
      userinfo: json,
    });
  }
  render() {
    const { name, location, avatar_url } = this.state.userinfo;

    return (
      <div className="user-component">
        <img src={avatar_url}></img>
        <h2 className="text-lg font-semibold">Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : 8975046766</h4>
      </div>
    );
  }
}

export default UserClassBaseComponent;
