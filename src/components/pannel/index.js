import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SpacerComponent, ButtonComponent } from 'app/components';

import './style.scss';

class PannelComponent extends Component {

    static NEXT = 'Next';

    static DONE = 'Done';

    static SIZE = 250 - 32; // css width + padding

    static propTypes = {
        title: PropTypes.string,
        instructions: PropTypes.array,
        onComplete: PropTypes.func,
    }

    static defaultProps = {
        instructions: [],
    }

    state = {
        step: 0,
    }

    gotoNextStep = () => {
        const step = this.state.step + 1;
        if (step < this.props.instructions.length) {
            this.setState({
                step,
            });
        } else {
            this.props.onComplete();
        }
    }

    changeStep = (step) => {
        this.setState({
            step,
        });
    }

    render() {
        const { title, instructions } = this.props;
        const { NEXT, DONE, SIZE } = PannelComponent;

        return (
            <div className="pannel">
                <h2>{title}</h2>
                <SpacerComponent />
                <div className="pannel__content">
                    <div
                        className="slide"
                        style={{
                            width: SIZE * (instructions.length + 1),
                            transform: `translateX(-${this.state.step * SIZE}px)`,
                        }}
                    >
                        {
                            instructions.map((step, index) => (
                                <div
                                    key={`item-${index}`}
                                    className="pannel__content__item"
                                >
                                    {step.icon &&
                                        <img src={step.icon} alt="" />
                                    }
                                    <SpacerComponent />
                                    <p>{step.copy}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
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
                    <ButtonComponent
                        title={this.state.step !== instructions.length - 1 ? NEXT : DONE}
                        onClick={this.gotoNextStep}
                    />
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
