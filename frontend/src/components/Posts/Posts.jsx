import React, { useEffect } from 'react';

import Post from './Post/Post';

import style from './Posts.module.css';


import userPhoto from '../../assets/profile.png';
import image from '../../assets/Post.png';


const Posts = (props) => {
    console.log(props.posts);
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
                {
                    props.posts.map(post => <Post key={post.id}
                                                  userPhoto={userPhoto}
                                                  userName={`${post.surname} ${post.name}`}
                                                  date={post.date}
                                                  postImage={image}
                                                  postText={post.text}
                                                  likesCount={post.likesCount} />
                    )
                }
            </div>
        </div>
    )
}

export default Posts;