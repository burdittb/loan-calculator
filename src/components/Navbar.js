import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import '../stylesheets/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <FontAwesomeIcon icon={faBars} className="navbar-left-icon" />
        <img src="images/logo512.png" alt="logo" />
      </div>
      <div className="navbar-right">
        <button type="button">Create Account</button>
        <FontAwesomeIcon icon={faSearch} className="navbar-right-icon" />
      </div>
    </div>
  );
};

export default Navbar;
