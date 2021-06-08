import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const NavItem = ({ item: { label, route } }) => {
  return (
    <NavLink to={route} activeClassName="active-nav">
      <h4>{label}</h4>
    </NavLink>
  );
}

NavItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
  }),
};

export default NavItem;
