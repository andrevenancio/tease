import React, { PureComponent } from 'react';
import { PannelComponent } from 'app/components';

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
                <PannelComponent />
            </div>
        );
    }
}

export default Scene;
