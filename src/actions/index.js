import _ from 'lodash'
import jsonPlaceHolder from '../apis/jsonPlaceHolder'

export const fetchPosts = () => async dispatch =>  {
    const res = await jsonPlaceHolder.get('/posts')
    // console.log(res.data)
    dispatch({
        type : 'FETCH_POSTS',
        payload : res.data
    })
}

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // await dispatch(fetchPosts())
    // const userIds = _.uniq(_.map(getState().posts, 'userId'))
    // userIds.forEach(userId => dispatch(fetchUser(userId)))

    /****************OR********************/

    await dispatch(fetchPosts())
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(userId => dispatch(fetchUser(userId)))
        .value()
    
}

//*************OR****************/

// export const fetchUser = id =>  dispatch => {
//     _fetchUser(id, dispatch)
// }
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const res = await jsonPlaceHolder.get(`/users/${id}`)
    
//     dispatch({
//         type : 'FETCH_USER',
//         payload : res.data
//     })
// })

export const fetchUser = id => async dispatch => {
    const res = await jsonPlaceHolder.get(`/users/${id}`)
    
    dispatch({
       type : 'FETCH_USER',
       payload : res.data
   })
}


