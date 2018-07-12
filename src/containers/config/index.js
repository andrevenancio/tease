import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { PATHS } from 'app/constants';

class ConfigContainer extends PureComponent {

    componentDidMount() {
        // console.log('config mount');
    }

    componentWillUnmount() {
        // console.log('config unmount');
    }

    render() {
        return (
            <div className="page">
                <h1>Config</h1>
                <p>configure your character here</p>
                <Link
                    to={PATHS.HOME}
                    className="button-default"
                >
                    Back
                </Link>

                <Link
                    to={PATHS.LEVEL}
                    className="button-default"
                >
                    Enter
                </Link>
            </div>
        );
    }
}

export default ConfigContainer;
