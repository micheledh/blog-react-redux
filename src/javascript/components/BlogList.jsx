import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Post from './Post';
import {fetchGetPosts} from '../actions/actions';

function mapStateToProps(state) {
    return {
        data: state.data
    };
}

class BlogList extends Component {
    static propTypes = {
        data: PropTypes.any,
        dispatch: PropTypes.func
    };

    sortByDate = (data) => {
        return data.sort(function(p1, p2) {
            return p1[1].date.getTime() < p2[1].date.getTime();
        })
    };

    componentDidMount() {
        this.props.dispatch(fetchGetPosts());
    }

    render () {
        const sortedData = this.props.data ? this.sortByDate(Array.from(this.props.data)) : [];
        return (
            <main>
                {sortedData.map((post, index) => {
                    return (
                        <Post id={post[0]} key={post[0]} isRed={index % 2 === 1} />
                    );
                })}
            </main>
        )
    }
}

export default connect(mapStateToProps)(BlogList);
