import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../index.css';
import Header from './Header';
import Footer from './Footer';
// import products from '../server/server';

const mapStateToProps = state => {
    return state
};

class Content extends Component {
    render() {
        return (
            <div className='main'>
            <Header />
            <div className='content'><p>This is supposed to be content here</p></div>
            <Footer />
            </div>
        )

    }
}

export default connect(mapStateToProps) (Content);