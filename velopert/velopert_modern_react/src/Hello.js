import React from 'react'

function Hello({color, name , isSpecial}) {
  return (
         <div style={{color}}> 

                {/* {isSpecial ? <b>*</b> : null} */}
                {isSpecial && <b>*</b> }
                안녕하세요 {name} 

        </div>
        
        );
}

//  defaultProps : 컴포넌트에 props를 지정하지 않았을 때 기본적으로 사용 할 값을 설정
Hello.defaultProps = {
    name : '이름없음'
}

export default Hello