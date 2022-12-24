import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export const users = [
    {
        id : 1,
        name : "aaa",
        email : "aaa@mail.com"
    },
    {
        id : 2,
        name : "bbb",
        email : "bbb@mail.com"
    },
    {
        id : 3,
        name : "ccc",
        email : "ccc@mail.com"
    }
];



function Hello() {


    // Link태그의 비하인드 코드 버전
    const navigate = useNavigate();

    const onClickLink = (id) =>  {

        if(window.confirm("이동하시겠습니까?")) {
            navigate(`/hello/${id}`);
        }

        
    }


    return (
        <>
            <h1>Hello</h1>
            <p>
                Hello 페이지 입니다.
            </p>

            <hr />

            <ul>
                {users.map((user) => 
                    <li>
                        {/*
                        <Link to={`/hello/${user.id}`}>
                            {user.name} / {user.email}
                        </Link>
                        */}

                        {/* useNavigate를 이용하면 코드로 구현할 수 있다 */}
                        <p onClick={() => onClickLink(user.id)}>
                            {user.name}
                        </p>
                    </li>
                )}
            </ul>

        </>
    );

}

export default Hello;