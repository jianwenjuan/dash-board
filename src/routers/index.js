import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SiderMenus from '../components/layout/SideMenus';
import RootBreadcrumb from '../components/layout/RootBreadcrumb';

import Home from '../containers/Home';
import Tables from '../containers/Tables';
import Profile from '../containers/Profile';


export const SiderMenusRouter = () =>
    <Route path="*" component={SiderMenus} />

export const RootBreadcrumbRoute = ()=>
    <Route path="*" component={RootBreadcrumb} />

export const ContentRoute = () =>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tables" component={Tables} />
        <Route exact path="/profile" component={Profile} />
    </Switch>