import React, {Component} from 'react';
import NewPost from './NewPost';

import style from '../../styles/header.css';

export default class Header extends Component {
    render() {
        return (
        <header className={style.header}>
            <h1 className={style.titleh1}>Posts</h1>
            <NewPost />
        </header>
    ) }
}