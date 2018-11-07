import React from 'react';
import Aux from '../../hoc/aux';
import classes from './layout.module.css';

const Layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, BackDrop</div>
        <main className={classes.Content}>{props.children}</main>
    </Aux>
);

export default Layout;