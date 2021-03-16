import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Header from './components/Header';

import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

const App = () => {
    return (
        <div className="app">
           <Router>
                <>
                    <Header />
                    <AppBody>
                        <Sidebar />

                        <Switch>
                            <Route path="/">
                                <Chat />
                            </Route>
                        </Switch>

                    </AppBody>
                </>
            </Router>
        </div>
    )
}

export default App;

const AppBody = styled.div`
    display: flex;
    height: 100vh;
`;
