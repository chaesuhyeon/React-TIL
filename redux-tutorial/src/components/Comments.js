import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { fetchComments } from '../redux';

const Comments = ({fetchComments, loading , comments}) => {
    // 컴포넌트가 랜더링되면 한번 실행될 수 있도록 useEffect 사용
    useEffect(()=> {
        fetchComments()
    }, []) // 뒤에 두번째 인자 []를 넣어서 반복실행되지 않고 한번만 실행되도록 
    const commentsItems = loading ? (<div>is loading ... </div> ) :  (
        comments.map(comment => (
           <div key={comment.id}>
            <h3>{comment.name}</h3>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
           </div> 
        ))
    )
  return (
    <div className='comments'>
        {commentsItems}
    </div>
  )
}

const mapStateToProps = ({comments}) =>{
    return {
      comments : comments.items
    }
  } 

const mapDispatchToProps = {
    fetchComments
    
}

export default connect(mapStateToProps,mapDispatchToProps )(Comments);