import ListItems from '../ListItems/index';
import { NavWrapper } from './nav.styles';
import { NavItem } from './index';
import PropTypes from 'prop-types';

const DesktopNav = ({ items }) => {
  return (
    <NavWrapper>
      <ListItems items={items} keyPrefix="nav-item">
        <NavItem />
      </ListItems>
    </NavWrapper>
  );
}

DesktopNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default DesktopNav;
