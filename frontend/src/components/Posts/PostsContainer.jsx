import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {getPosts} from '../../redux/posts-reducer';
import {getReversPostsArray} from '../../redux/selectors/posts-selectors';

import Posts from './Posts';

const PostContainer = (props) => {
    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = () => {
        props.getPosts();
    };
    
    return (
        <Posts posts={props.posts}/>
    )
}

let mapStateToProps = (state) => {
    return ({
        posts: getReversPostsArray(state)
    })
}

export default connect(mapStateToProps, {getPosts})(PostContainer);