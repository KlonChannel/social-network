import React from 'react';

import style from './Post.module.css';

import like from '../../../assets/likeicon.png';

const Post = (props) => {
    return (
            <div className={style.post}>
                <div className={style.postAuthor}>
                    <div className={style.userPhoto}>
                        <img src={props.userPhoto} alt='user photo' />
                    </div>

                    <div className={style.userName}>
                        {props.userName}
                    </div>

                    <div className={style.date}>
                        {props.date}
                    </div>
                </div>

                <div className={style.postImage}>
                    <img src={props.postImage} alt='post image' />
                </div>

                <div className={style.postText}>
                    {props.postText}
                </div>

                <div className={style.likes}>
                    <img src={like} alt='like' /> 
                    <div>{props.likesCount}</div>
                </div>
            </div>
        )
}

export default Post;