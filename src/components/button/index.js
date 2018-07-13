import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class ButtonComponent extends Component {
    static propTypes = {
        title: PropTypes.string,
        onClick: PropTypes.func,
    }

    static defaultProps = {
        title: 'Button',
        onClick: () => null,
    }

    render() {
        const { title } = this.props;
        return (
            <button
                className="button"
                onClick={this.props.onClick}
            >
                {title}
            </button>
        );
    }
}

export default ButtonComponent;
