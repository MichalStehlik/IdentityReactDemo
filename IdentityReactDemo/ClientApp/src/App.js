import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
//import { FetchData } from './components/FetchData';
//import { Counter } from './components/Counter';
//import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
//import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
//import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';
import { AuthProvider } from "./providers/AuthProvider";
import Protected from './components/Protected';
import Unprotected from './components/Unprotected';
import Admin from './components/Admin';
import Public from './components/Public';
import NotFound from './components/General/NotFound';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
          <AuthProvider>
            <Layout>
                <Routes>
                    <Route index path='/' element={<Home />} />
                    <Route path='/public' element={<Public />} />
                    <Route path='/unprotected' element={<Unprotected />} />
                    <Route path='/admin' element={<Admin />} />
                    <Route path='/protected' element={<Protected />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
             </Layout>
           </AuthProvider>
    );
  }
}
/*
 *         <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <AuthorizeRoute path='/fetch-data' component={FetchData} />
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
 * */

