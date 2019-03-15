import React, { Component } from "react";

export default class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      profileUrl: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { email, username, password, profileUrl } = this.state;
    const { heading, buttonText, signup } = this.props;
    return (
      <div>
        <div className="row justify-content-md-center text-center">
          <div className="col-md-6">
            <form onSubmit={this.handleSubmit}>
              <h2>{heading}</h2>
              <label htmlFor="email">Email:</label>
              <input
                className="form-control"
                id="email"
                name="email"
                onChange={this.handleChange}
                value={email}
                type="text"
              />
              <label htmlFor="password">Password:</label>
              <input
                className="form-control"
                id="password"
                name="password"
                onChange={this.handleChange}
                type="password"
              />
              {signup && (
                <div>
                  <label htmlFor="username">Username:</label>
                  <input
                    className="form-control"
                    id="username"
                    name="username"
                    onChange={this.handleChange}
                    value={username}
                    type="text"
                  />
                  <label htmlFor="image-url">Image URL:</label>
                  <input
                    className="form-control"
                    id="image-url"
                    name="ProfileImageUrl"
                    onChange={this.handleChange}
                    type="ProfileImageUrl"
                  />
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
}
