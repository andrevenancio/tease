import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { selectAppReady } from 'app/store/app/selectors';
import { PATHS } from 'app/constants';
import { HomeContainer, ConfigContainer, LevelContainer, AboutContainer } from 'app/containers';
import { LoadingComponent, GameComponent, ConnectionComponent } from 'app/components';


const ROUTES = [
    {
        path: PATHS.HOME,
        component: HomeContainer,
        exact: true,
    },
    {
        path: PATHS.CONFIG,
        component: ConfigContainer,
    },
    {
        path: PATHS.LEVEL,
        component: LevelContainer,
    },
    {
        path: PATHS.ABOUT,
        component: AboutContainer,
    },
];

const render = (Component, props, options) => {
    return (
        <Component {...props} location={options.location} />
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
                                        const { component, path, exact } = route;
                                        return (
                                            <Route
                                                key={index}
                                                path={path}
                                                exact={exact}
                                                render={props => render(component, props, { location })}
                                            />
                                        );
                                    })
                                }
                                <Redirect path={PATHS.ALL} to={PATHS.HOME} />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>

                    <ConnectionComponent />
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
