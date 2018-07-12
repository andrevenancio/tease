import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';

import { selectAppReady } from './store/app/selectors';
import {
    HomeContainer,
    ConfigContainer,
    LevelContainer,
    AboutContainer,
} from './containers';
import { PATHS } from './constants';
import LoadingComponent from './components/loading';
import GameComponent from './components/game';

const ROUTES = [
    {
        path: PATHS.HOME,
        component: HomeContainer,
        exact: true,
    },
    {
        path: PATHS.CONFIG,
        component: ConfigContainer,
        exact: true,
    },
    {
        path: PATHS.LEVEL,
        component: LevelContainer,
        exact: true,
    },
    {
        path: PATHS.ABOUT,
        component: AboutContainer,
        exact: true,
    },
];

const render = (Component, props) => {
    return (
        <Component {...props} />
    );
};

class Application extends PureComponent {

    static propTypes = {
        ready: PropTypes.bool,
    }

    renderLoading() {
        return (
            <LoadingComponent />
        );
    }

    renderApp() {
        return (
            <Route render={({ location }) => (
                <div className="container">
                    { false &&
                        <GameComponent />
                    }

                    <TransitionGroup>
                        <CSSTransition
                            key={location.key}
                            classNames="fade"
                            timeout={500}
                        >
                            <Switch location={location}>
                                {
                                    ROUTES.map((route, index) => {
                                        const { component, path, exact, secure } = route;
                                        return (
                                            <Route
                                                key={index}
                                                path={path}
                                                exact={exact}
                                                render={props => render(component, props, { secure })}
                                            />
                                        );
                                    })
                                }
                                <Redirect path={PATHS.ALL} to={PATHS.HOME} />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
                )}
            />
        );
    }

    render() {
        return (
            <Router>
                { !this.props.ready ?
                    this.renderLoading() :
                    this.renderApp()
                }
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    ready: selectAppReady(state.app),
});

export default connect(mapStateToProps)(Application);
