import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './style.scss';

class SpacerComponent extends Component {

    static propTypes = {
        size: PropTypes.string,
    }

    static defaultProps = {
        size: 'medium',
    }

    render() {
        const classes = classnames({
            spacer: true,
            [this.props.size]: true,
        });

        return (
            <div className={classes} />
        );
    }
}

export default SpacerComponent;
