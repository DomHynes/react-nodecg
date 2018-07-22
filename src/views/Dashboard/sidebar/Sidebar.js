import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Sidebar extends Component {
  render() {
    return (
      <ul id="sidebar">
        <li>
          <Link to="/bundles/test/dashboard/names">Names</Link>
        </li>
        <li>
          <Link to="/bundles/test/dashboard/">Names</Link>
        </li>
      </ul>
    )
  }
}

export default Sidebar;
