import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getCurrentUser, singIn } from "../../api/admin";
import { useUserIdDispatch } from "../../data/auth";
import { useInputs } from "../../hook/useInputs";
import AdminForm from "../admin/AdminForm";
import { Button } from "../common/button";
import { Input } from "../common/input";

function SignIn() {
  const [inputs, handleInputs] = useInputs({
    email: "",
    password: "",
  });


  const dispatch = useUserIdDispatch();

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();


    await singIn(inputs);
    //const token = await singIn(inputs);
    //window.localStorage.setItem("access-token", token);
    const user = await getCurrentUser();
    console.log(user.id)
    dispatch(user.id);

    navigate("/");

    /* singIn(inputs).then((token) => {
      //console.log(token)
      //window.localStorage.setItem("access-token", token);
      navigate("/");      
    }); */
  };

  const toSignUp = () => {
    navigate("/signup");
  };

  return (
    <AdminForm title="로그인" onSubmit={onSubmit}>
      <InputWrapper>
        <Input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleInputs}
        />
        <Input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleInputs}
        />
      </InputWrapper>
      <BtnWrapper>
        <Button bgColor="#999" type="submit">
          로그인
        </Button>
        <Button onClick={toSignUp}>회원가입</Button>
      </BtnWrapper>
    </AdminForm>
  );
}

const InputWrapper = styled.div``;

const BtnWrapper = styled.div`
  margin-top: 30px;
`;

export default SignIn;
