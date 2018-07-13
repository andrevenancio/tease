import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SpacerComponent, ButtonComponent } from 'app/components';

import './style.scss';

class PannelComponent extends Component {

    // NEXT
    // DONE
    // PREVIOUS
    static propTypes = {
        title: PropTypes.string,
        instructions: PropTypes.array,
        // onComplete: PropTypes.func,
    }

    static defaultProps = {
        instructions: [],
    }

    state = {
        step: 0,
        button: 'Next',
    }

    changeStep = (step) => {
        this.setState({
            step,
        });
    }

    render() {
        const { title, instructions } = this.props;

        return (
            <div className="pannel">
                <h2>{title}</h2>
                <SpacerComponent />
                <img src="https://colab.lynkco.com/auth-template/icons/facebook.svg" alt="" />
                <SpacerComponent />
                <p>Lorem ipsum dolor sit amet. blablab bla follow this instructions</p>
                <SpacerComponent />
                <ul>
                    {
                        instructions.map((step, index) => {
                            const classes = classnames({
                                selected: this.state.step === index,
                            });
                            return (
                                <li
                                    key={`li-${index}`}
                                    className={classes}
                                    onClick={() => { this.changeStep(index); }}
                                />
                            );
                        })
                    }
                </ul>
                <SpacerComponent />
                <div className="buttons">
                    <ButtonComponent title={this.state.button} />
                </div>
            </div>
        );
    }
}

export default PannelComponent;

// <div className="pannel__copy">
//     <div style={{ width: 1000 }}>
//         { instructions.map((current, index) => (
//             <div className="pannel__copy__item" key={`instructions-${index}`}>
//                 <p>
//                     {current.copy}
//                 </p>
//
//                 { current.icon &&
//                     <img alt="" src={current.icon} />
//                 }
//             </div>
//         ))}
//     </div>
// </div>
