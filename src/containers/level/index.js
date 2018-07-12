import React, { PureComponent } from 'react';

class Scene extends PureComponent {

    componentDidMount() {
        // console.log('level mount');
    }

    componentWillUnmount() {
        // console.log('level unmount');
    }

    render() {
        return (
            <div className="page">
                <h1>Scene</h1>
                <p>lorem ipsum</p>
            </div>
        );
    }
}

export default Scene;
