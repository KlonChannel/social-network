import React from 'react';

import Post from './Post/Post';

import style from './Posts.module.css';


import userPhoto from '../../assets/profile.png';
import image from '../../assets/Post.png';


const Posts = (props) => {
    return (
        <div className={style.posts}>
            <div className={style.postsHeader}>
                <h2>Posts</h2>

                <form className={style.postsForm}>
                    <div>
                        <textarea name='post' placeholder='Your post...' maxLength={1000} />
                    </div>

                    <div className={style.fileUpload}>
                        <input name='file' type='file' />
                    </div>

                    <div>
                        <button className={style.button}>Post</button>
                    </div>
                </form>
            </div>

            <div className={style.postsFeed}>
                <Post userPhoto={userPhoto}
                    userName='Drozdov Nikita'
                    date='1/01/2025'
                    postImage={image}
                    postText='Aw, its my first post! Its so wonderful!!! Aw, its my first post! Its so wonderful!!! Aw, its my first post! Its so wonderful!!!'
                    likesCount={10} />

                <Post userPhoto={userPhoto}
                    userName='Surname Name'
                    date='20/12/2024'
                    postImage={image}
                    postText='Hello everyone!'
                    likesCount={3} />

                <Post userPhoto={userPhoto}
                    userName='Vladimirov Vladimir'
                    date='1/01/2024'
                    postImage={image}
                    postText='Spam: 00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
                    likesCount={0} />
            </div>
        </div>
    )
}

export default Posts;