# React Router

URL에 따라 컴포넌트를 선택적으로 렌더링 할 수 있다. SPA(Single Page Application)을 개발할 수 있다. SPA는 새로고침이 일어지 않으며, 화면의 일부만 렌더링하여 사용할 수 있다.


---

## 설치 방법
    npm install react-router-dom

---

### BroserRouter

React Router를 사용하고자하는 컴포넌트를 BrowserRouter로 감싸야한다.

```javascript
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>    
      <App />
    </BrowserRouter>  
);
```
---

### Routes, Route

라우팅을 할때에는 Routes 내부에 Route를 통해 URL에 따라 렌더링 될 컴포넌트를 작성한다.

```javascript
<Routes>
    <Route path="경로" element={컴포넌트} />
</Routes>
```

---

### 중첩 라우팅

라우팅된 컴포넌트 내부에서 다시 라우팅을 할 수 있다.
이때 부모 라우트는 뒤에 *를 넣어주어야한다.

```javascript
<Routes>
    <Route path="/hello/*" element={<Hello />}>
        <Route path="1" element={<div>1</div>} />
        <Route path="2" element={<div>2</div>} />
    </Route>
</Routes>
```

Route 안에서 중첩하여 사용할 때 상위 컴포넌트에서는 Outlet 컴포넌트를 활용하여 어느 위치에 렌더링 해야하는지 정할 수 있다.

```javascript
function Hello() {
    return(
        <>
            <h1>Hello Component</h1>
            <Outlet/>
        </>
    );
}
```

URL이 /hello인 경우(즉, 하위 주소가 없는 경우) 하위 컴포넌트들은 렌더링되지 않고, 하위 주소가 있는 경우 해당 path에 맞는 컴포넌트들이 출력 된다.

---

### useParams

URL의 파라미터를 받아올 수 있다.
ex)/hello/:id => /hello/123 => 123


```javascript
<Routes>
    <Route path="/users" element={<UserList />} />
    <Route path="/users/:id" element={<UserDetail />} />
</Routes>
```
URL이 /users로 딱 맞으면 userList 컴포넌트로, 뒤에 다른 값이 오면 UserDetail로 이동한다.

UserDetail 컴포넌트에서 파라미터(id)값을 userParam을 통해 읽어올 수있다. 파라미터 이름은 path에 기입된 **:파라미터 이름**에 따라 달라진다. userPram의 리턴값은 객체이다.

---

## useSearchParams
쿼리스트링을 간편하게 변환하여 사용할 수 있다. useSearchParams를 사용하면 배열를 리턴하는데 그 첫번째 값이 객체이다. 그 객체의 get("메서드명")를 통해서 쿼리값들을 읽어올 수 있다. 쿼리값은 key:value...의 형태로 저달된다.

파라미터보다 복잡하고 여러개의 값을 전달해야될 때에는 쿼리 스트링을 사용한다.


```javascript
    function Detail() {
        const [searchparams] = useSearchParams();
        const email = searchparams.get("email");
        const age = searchparams.get("age");
        return (
            <div>
                <p>{email}</p>
                <p>{name}</p>
            </div>
        );
    }
```

---

### useNavigate

Link 컴포넌트가 아닌 다른 방법으로 URL을 변경(이동)해야할 때 사용한다. useNavigate의 반환값은 함수이며, 인자로 URL을 전달하면 변경된다.

주의사항으로 문자의 앞에 /가 있을때와 없을때를 주의해야한다. /가 붙으면 루트(base URL)를 가르키고, /를 생략하면 현재 URL주소에 붙는다.

```javascript
function Hello() {

    const navigate = useNavigate();
    const onClickLink = (id) =>  {
        if(window.confirm("이동하시겠습니까?")) {
            navigate(`/hello/${id}`);
        }
    }

    return(
        <>
            <p onClick={() => onClickLink(user.id)}>
                {user.name}
            </p>
        </>
    );
}
```