import React, { PureComponent } from 'react';

class AboutContainer extends PureComponent {

    componentDidMount() {
        // console.log('about mount');
    }

    componentWillUnmount() {
        // console.log('about unmount');
    }

    render() {
        return (
            <div className="page">
                <div className="holder">
                    <h1>About</h1>
                    <p>some tech specs about this project</p>
                </div>
            </div>
        );
    }
}

export default AboutContainer;
