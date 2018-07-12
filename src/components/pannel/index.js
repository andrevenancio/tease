import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { PATHS } from 'app/constants';
import './style.scss';

class PannelComponent extends Component {
    render() {
        return (
            <div className="pannel">
                <h2>Title</h2>
                <p>Welcome to this wip component</p>
                <img alt="" />
                <ul>
                    <li />
                    <li className="selected" />
                    <li />
                    <li />
                    <li />
                </ul>
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

export default PannelComponent;
