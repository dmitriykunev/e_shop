import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import '../index.css';
import Sidebar from './SideBar';
import Header from './Header';
import Footer from './Footer';

const mapStateToProps = state => {
    return state
};

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Sidebar />
                <div className='content'><h1>It Works!</h1></div>
                <Footer />
                </Fragment>
        )
    }
}

export default connect(mapStateToProps) (Content);