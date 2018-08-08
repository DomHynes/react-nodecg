import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Menu } from 'antd';
const { Item } = Menu;


class Sidebar extends Component {
  render() {
    return (
        <Route
          render={({ history: { location: { search } }}) => (
            <Menu theme="dark">
              <Item>
                <Link to={{
                  pathname: "/bundles/test/dashboard/setinfo",
                  search
                }}>Set Info</Link>
              </Item>
              <Item>
                <Link to={{
                  pathname: "/bundles/test/dashboard/text",
                  search,
                }}>text</Link>
              </Item>
            </Menu>
      )} />
    )
  }
}

export default Sidebar;
