import { Link } from "react-router-dom";

function Header() {

    return (
        <>
            <ul>
                <li>
                    {/* <a href="/">Main</a> */}
                    <Link to={"/"}>Main</Link>
                </li>
                <li>
                    {/* <a href="/Hello">Hello</a> */}
                    <Link to={"/hello"}>Hello</Link>
                </li>
            </ul>
        </>
    );

}

export default Header;