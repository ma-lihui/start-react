import React from 'react';
import {hashHistory} from 'react-router';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'app',
            open: false,
        };
    }

    render() {
        return (
            <div className="container">
                <div style={{position: 'relative', height: '100%'}}>
                    <div>
                        {this.props && this.props.children && React.cloneElement(this.props.children, {
                            changeTitle: title => this.setState({title})
                        }) || 'no content'}
                    </div>
                </div>
                <div className="fixed-bottom">底部固定条</div>
            </div>
        );
    }
}
