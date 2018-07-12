import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { LoadingComponent } from 'app/components';
import Game from 'app/game';
import { selectScenesLoading } from 'app/store/scenes/selectors';

import './style.scss';

class GameComponent extends Component {

    static propTypes = {
        loading: PropTypes.bool,
        // scene: PropTypes.shape({
        //     title: PropTypes.string,
        //     instructions: PropTypes.array,
        // }),
    }

    constructor(props) {
        super(props);
        this.game = new Game();
    }

    componentDidMount() {
        this.game.start({ canvas: this.canvas });
    }

    componentWillUnmount() {
        this.game.end();
    }

    render() {
        return (
            <div className="world">
                <canvas ref={(e) => { this.canvas = e; }} />
                { this.props.loading &&
                    <LoadingComponent />
                }
            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        loading: selectScenesLoading(state),
        // scene: selectScenesCurrent(state),
    }
);

export default connect(mapStateToProps)(GameComponent);
