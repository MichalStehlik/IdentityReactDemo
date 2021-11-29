import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { AuthProvider } from "./providers/AuthProvider";
import SignInCallback from "./components/Auth/SignInCallback";
import SignOutCallback from "./components/Auth/SignOutCallback";
import SilentRenewCallback from "./components/Auth/SilentRenewCallback";
import Protected from './components/Protected';
import Unprotected from './components/Unprotected';
import Admin from './components/Admin';
import Public from './components/Public';
import NotFound from './components/General/NotFound';
import { Paths } from "./configuration/main";

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
          <AuthProvider>
            <Layout>
                  <Routes>
                    <Route path={Paths.LoginCallback} element={<SignInCallback />} />
                    <Route path={Paths.LogoutCallback} element={<SignOutCallback />} />
                    <Route path={Paths.RenewCallback} element={<SilentRenewCallback />} />
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
