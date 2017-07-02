import React from "react";
import {Link} from "react-router"



export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial 7/11</h1>
        <ul role="nav">
          {this.props.children}
          <li><Link to="/">Featured</Link></li>
          <li><Link to="/archives" class="btn-success">Archives</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      
      </div>
    )
  }
})