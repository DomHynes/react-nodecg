import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Sidebar extends Component {
  render() {
    return (
      <ul id="sidebar">
        <li>
          <Link to="/bundles/test/dashboard/setinfo">Set Info</Link>
        </li>
      </ul>
    )
  }
}

export default Sidebar;
