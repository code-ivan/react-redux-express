// @flow
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Nav from '../Nav'

class Header extends React.Component {

  constructor() {
     super();
     this.state = { hidden: true};
     this.show = this.show.bind(this);
  }

  componentDidMount() {
    setTimeout(function() {
      this.show();
    }.bind(this), 200);
  }

  show () {
    this.setState({ hidden: false});
  }

  render() {
    const styles = require('./Header.scss')

    return (
      <header className={ styles.Header + " " + (this.state.hidden ? styles.hideHeader : '') }>
        <div className="pull-left">
            <div className={ styles.logo }>
              <Link to="/">
                <img src={'/assets/images/logo.png'} />
              </Link>
            </div>
            <div className={ styles.phone }>
                <i className={ styles.icon +' icon-phone' }></i>
                <span>020 3637 4150</span>
            </div>
        </div>

        <Nav />
      </header>
    )
  }
};

Header.displayName = 'Header'

export default Header
