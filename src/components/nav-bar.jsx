import logo from '../assets/images/react.svg';
import { NavLink } from 'react-router';
import '../index.css';
function NavBar() {
  return (
    <div className='navigation-bar'>
      <div className='logo'>
        <img src={logo} className='logo-img' alt='logo' />
      </div>
      <div className='navigation-menu'>
        <ul>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            to='/'
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            to='/jobs'
          >
            Jobs
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            to='/hire'
          >
            Hire Now
          </NavLink>
        </ul>
        <button className='getStartedBtn'>Get Started</button>
      </div>
    </div>
  );
}

export default NavBar;
