import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { PATHS } from 'app/constants';

class HomeContainer extends PureComponent {

    componentDidMount() {
        // console.log('home mount');
    }

    componentWillUnmount() {
        // console.log('home unmount');
    }

    render() {
        return (
            <div className="page">
                <div className="holder">
                    <h1>Home</h1>
                    <p>introduction to the project</p>
                    <Link
                        to={PATHS.CONFIG}
                        className="button-default"
                    >
                        Start
                    </Link>
                </div>
            </div>
        );
    }
}

export default HomeContainer;
