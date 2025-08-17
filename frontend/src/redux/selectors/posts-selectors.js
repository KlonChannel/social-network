export const getReversPostsArray = (state) => {
    const posts = [...state.postsPage.posts];
    
    return posts.reverse();
} 