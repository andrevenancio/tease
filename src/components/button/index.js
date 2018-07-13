import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class ButtonComponent extends Component {
    static propTypes = {
        title: PropTypes.string,
    }

    static defaultProps = {
        title: 'Button',
    }

    render() {
        const { title } = this.props;
        return (
            <button className="button">
                {title}
            </button>
        );
    }
}

export default ButtonComponent;
