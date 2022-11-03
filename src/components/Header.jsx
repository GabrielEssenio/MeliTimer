import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>
          Team
          <span className="title-spotlight"> Audience </span>
          {' '}
          Growth Tooling
        </h1>
      </header>
    );
  }
}

export default Header;
