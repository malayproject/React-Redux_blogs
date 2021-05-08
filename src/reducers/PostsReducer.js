const PostsReducer = (state = [], action) => {
    // console.log("Posts reducer called with action and state", action, state)
    switch(action.type) {
        case 'FETCH_POSTS' : 
            return action.payload;
        default :
            return state;
    }
}

export default PostsReducer