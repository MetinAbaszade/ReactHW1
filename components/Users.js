import React, { Component } from "react";
import UserConsumer from "./context";
import User from "./User";

export default class Users extends Component {
  render() {
    return (
      <UserConsumer>
        {(value) => {
          const { users } = value;
          return (
            <div>
              {users.map((user) => (
                <User key={user.id} user={user} />
              ))}
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
