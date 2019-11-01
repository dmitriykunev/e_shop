import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return state
};

class Content extends Component {
    render() {
        return (
            <h1> It works !</h1>
        )
    }
}

export default connect(mapStateToProps) (Content);