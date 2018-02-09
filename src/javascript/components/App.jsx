import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import BlogList from './BlogList';
import Dialog from './Dialog';

import style from '../../styles/App.css';

const App = ({dialog}) => (
    <div className={style.appContainer}>
        <Header />
        <BlogList />
        {dialog ? <Dialog dialog={dialog}/> : null}
    </div>
);

function mapStateToProps(state) {
    return {
        dialog: state.dialog
    };
}

export default connect(mapStateToProps)(App);
