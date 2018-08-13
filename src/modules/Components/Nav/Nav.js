// @flow
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { setShowFinanceSubmenu } from '../../Reducers/actions/navActions'
import Loading from '../../Components/Loading';

const Nav = (props) => {
  const styles = require('./Nav.scss')

  const { menu, nav } = props;

  const toggleFinanceSubmenu = () => {
    props.setShowFinanceSubmenu(!nav.showFinanceSubmenu);
  }

  const showFinanceSubmenu = () => {
    props.setShowFinanceSubmenu(true);
  }

  const hideFinanceSubmenu = () => {
    props.setShowFinanceSubmenu(false);
  }
  
  return (
      <nav className={ styles.nav }>
        <ul className={ styles.navList }>
          <li className={ styles.navListItem }>
            <NavLink to="/" className={ styles.navLink } activeClassName={ styles.active } exact>HOME</NavLink>
          </li>
          <li className={ styles.navListItem + ' ' + styles.navFunding }>
            <NavLink to="/apply" className={ styles.navLink } activeClassName={ styles.active } exact>
            Find funding
            </NavLink>
          </li>
        </ul>
      </nav>
  )
}

Nav.displayName = 'Nav'

const mapStateToProps = state => ({
 nav: state.nav
})


const mapDispatchToProps = (dispatch) => {
  return {
    setShowFinanceSubmenu: (value) => {
        dispatch(setShowFinanceSubmenu(value));
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
