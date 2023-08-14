import { Navbar } from '../Navbar';

import classes from './styles.module.scss';

const BUTTONS = [
  {
    label: 'Items',
    path: '/list',
  },
  { label: 'Add Item', path: '/form' },
];

export const Header: React.FC = () => (
  <header className={classes.header}>
    <h1 className={classes.menuLogo}>HEADER</h1>
    <Navbar items={BUTTONS} />
  </header>
);
