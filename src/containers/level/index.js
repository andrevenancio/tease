import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { PannelComponent } from 'app/components';
import { actionScenesChange } from 'app/store/scenes/actions';
import { selectScenesCurrent } from 'app/store/scenes/selectors';

const mapStateToProps = state => ({
    scene: selectScenesCurrent(state),
});

const mapDispatchToProps = dispatch => ({
    loadScene: scene => dispatch(actionScenesChange(scene)),
});

@connect(mapStateToProps, mapDispatchToProps)
class LevelContainer extends PureComponent {

    static propTypes = {
        scene: PropTypes.object,
        loadScene: PropTypes.func,
    }

    state = {
        show: true,
    }

    componentDidMount() {
        this.props.loadScene(this.props.scene || 'default');
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.scene !== this.state.scene) {
            this.setState({
                show: true,
            });
        }
    }

    componentWillUnmount() {
        // console.log('level unmount');
    }

    hideInstructions = () => {
        this.setState({
            show: false,
        });
    }

    render() {
        const { scene } = this.props;
        const { title, instructions } = scene || {};

        return (
            <div className="page">
                { this.state.show &&
                    <PannelComponent
                        title={title}
                        instructions={instructions}
                        onComplete={this.hideInstructions}
                    />
                }
            </div>
        );
    }
}

export default LevelContainer;
