import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { PATHS } from '../../constants';

class ConfigContainer extends PureComponent {

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
