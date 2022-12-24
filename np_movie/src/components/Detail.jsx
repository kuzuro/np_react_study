import { useLocation, useParams, useSearchParams } from "react-router-dom";
import {users} from "../components/Hello"

function Detail() {

    // URL 파라미터에서 데이터 가져오기
    const {userId} = useParams();

    console.log(userId)

    // 배열로 받는다
    //const data = users.filter(user => user.id === parseInt(userId));
    //console.log(data)
    
    /*
        const { id, name, email } = users.filter(user => user.id === parseInt(userId));
        filter의 반환형이 배열이기 때문에, [0]을 붙여주지 않으면 undefined가 나온다
    */

    // find는 1개만 반환한다
    const { id, name, email } = users.find((user) => user.id === parseInt(userId));

    return (
        <>
            <div>
                <h1>이름 : {name}</h1>
                <h2>이메일 : {email}</h2>
            </div>
        </>
    );

}

export default Detail; 