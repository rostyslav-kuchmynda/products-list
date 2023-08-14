import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import { LinkItem } from '../../types';

import classes from './styles.module.scss';

type NavbarTypes = {
  items: Array<LinkItem>;
};

export const Navbar: React.FC<NavbarTypes> = ({ items }) => (
  <nav className={classes.navBar}>
    <ul>
      {items.map(({ label, path }) => (
        <li key={label}>
          <Link to={path}>
            <Button className={classes.menuBtn} disableRipple size="large">
              {label}
            </Button>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
