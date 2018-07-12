import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { PATHS } from '../../constants';

class HomeContainer extends PureComponent {

    render() {
        return (
            <div className="page">
                <h1>Home</h1>
                <p>introduction to the project</p>
                <Link
                    to={PATHS.CONFIG}
                    className="button-default"
                >
                    Start
                </Link>
            </div>
        );
    }
}

export default HomeContainer;
