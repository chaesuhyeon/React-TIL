import React, {useState, useRef} from 'react'

function InputSample2() {
    const [inputs , setInputs] = useState({
        name:'',
        nickname:''
    });

    const nameInput = useRef();

    const {name, nickname} = inputs;  // 비구조화 할당을 통해 값 추출

    const onChange =(e) => {
        const {name, value} = e.target; // e.target에서 name과 value를 추출
        setInputs({
            ...inputs, //기존의 input을 복사한 뒤
            [name] : value //name 키를 가진 값을 value로 설정
        }) ;
    };

    const onReset=()=>{
        setInputs({
            name:'',
            nickname:""
        });
        nameInput.current.focus();
    }

  return (
    <div>
        <input name="name" placeholder="이름" onChange={onChange}  value={name}  ref={nameInput}/>
        <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
        <button onClick={onReset}>초기화</button>
        <div>
            <b>값 : </b>
            {name} ({nickname})
        </div>
    </div>
  );
}

export default InputSample2