import React from 'react';

class Login extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      userName : "",
      pwd : ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const {userName, pwd} = this.state;
    this.props.onSubmit(userName, pwd)
  }

  handleInputChange(e) {
    const {name,value} = e.target;
    this.setState({
      [name] : value
    })
  }

  render() {

    const {userName, pwd} = this.state;
    const {isLoading, error} = this.props;
    const disabled = isLoading?"disabled":""

    return (
      <div className="jumbotron" >
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label> Username: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              name="userName"
              value={userName}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
              <label >Password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="pwd"
                value={pwd}
                onChange={this.handleInputChange}
              />
          </div>
          <button type="submit" className="btn btn-primary" disabled={disabled}>LOGIN</button>
        </form>
        <h4 style={{textAlign:'center',color:'red'}}>{error.login}</h4>
      </div>
    )
  }
}

export default Login;
