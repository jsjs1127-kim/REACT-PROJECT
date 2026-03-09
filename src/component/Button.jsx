//전달 받은 속성값을 하나의 객체로 저장
// const Button = (props) =>{
//     console.log(props);

import { Children } from "react";

 
//     return <button style={{color:props.color}}>
//         {props.text} -{props.color.toUpperCase()}</button>
// }
//하나씩 받아오기(구조 분해 - 기본값 설정 가능)
const Button = ({text, color='blue', Children})=>{

        //이벤트 발생시 수행할 작업(함수)
        const onClickButton1 =  (e) => {
            //console.log(e);
            console.log(text);
        }


    return <button onClick={onClickButton1} 
    style={{color : color}}>{text} - {color.toUpperCase()}
        {Children}
    </button>
    ;
}
 
 
export default Button;
 