import { FETCH_COMMENTS, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_FAILURE, FETCH_COMMENTS_SUCCESS} from "./type";

const fetchCommentSuccess=(comments)=>{
    return {
        type : FETCH_COMMENTS_SUCCESS,
        payload : comments
    }
}

const fetchCommentFailure=(error)=>{
    return {
        type : FETCH_COMMENTS_FAILURE,
        payload : error
    }
}

const fetchCommentRequest=()=>{
    return {
        type : FETCH_COMMENTS_REQUEST
    }
}


export const fetchComments = () => {
    return(dispatch)  => {
        dispatch(fetchCommentRequest())
         fetch('https://jsonplaceholder.typicode.com/comments')
         .then(response => response.json())
         .then(comments => dispatch(fetchCommentSuccess(comments))) // 성공했을 경우 fetchCommentSuccess
         .catch(error => dispatch(fetchCommentFailure(error))) // error가 발생했을 때 catch , fetchCommentFailure
    }
}

