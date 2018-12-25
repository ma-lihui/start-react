import React from 'react';
import {queryRule,addRule} from '../services/api'
import './page1.less'

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response1: '',
            response2: ''
        };
    }
    componentDidMount() {
        this.props.changeTitle('Stage 2');
    }

    getRequest() {
        const params = {k: 1};
        queryRule(params).then(response=>{
            this.setState({
                response1: response
            });
            console.log(response);
        })
    }
    postRequest() {
        const params = {a: 1,b:2};
        addRule(params).then(response=>{
            this.setState({
                response2: response
            });
            console.log(response);
        })
    }
    render() {
        return (
            <div className='page page1'>
                <h1>page1</h1>
                <p>This is page1</p>
                <div>
                    <button onClick={this.getRequest.bind(this)}>get request</button>
                    <p>response: {this.state.response1} </p>
                </div>
                <div>
                    <button onClick={this.postRequest.bind(this)}>post request</button>
                    <p>response: {this.state.response2} </p>
                </div>
            </div>);
    }
}
