import React, { Component } from 'react'

import {Menu} from 'semantic-ui-react';

export class Navbar extends Component {
  render() {
    return (
      <div>
        hello from navbar
        <Menu>
            <Menu.Item name='Home'/>
        </Menu>
      </div>
    )
  }
}

export default Navbar
