import React from 'react';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.changeTitle('Stage 3');
    }

    render() {
        return (
            <div className='page page2'>
                <h2>Page 2</h2>
                <p>This is page2</p>
            </div>
        );
    }
}