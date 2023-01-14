import axios from "axios";

const token = localStorage.getItem("access-token");

axios.defaults.baseURL = "http://101.101.218.43";

if (token) {
  axios.defaults.headers = {
    Authorization: `Bearer ${token}`,
  };
}

/**
 *d
 * @param {{name: string, email : string, password : string}} form
 * @returns
 */
export const postUser = async (form) => {
  try {
    const result = await axios.post("users", {
      ...form,
    });

    return result;
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
};

export const singIn = async (form) => {
  const result = await axios.post("users/login", {
    ...form,
  })
  /* .then((res) => {
    axios.defaults.headers.Authorization = res.data.data.token;
  }); */


  const token = result.data.data.token;

  window.localStorage.setItem("access-token", token);
  //axios.defaults.headers.[Authorization] = result.data.data.token;
  axios.defaults.headers.Authorization = `Bearer ${token}`;

  

  //const token = await singIn(inputs);
  return true;//token;



};

export const getCurrentUser = async () => {
  const {data} = await axios.get("users/current");

  return data.data;
};

export const patchProfile = (form) => {
  return axios.patch("users/profile", form);
};

export const postPost = async (form) => {

  const {data } = await axios.post("posts", form);

  console.log(data)
  return data.data;
};

export const getAllPost = () => {
  axios.get("/posts").then((res) => console.log(res));
};




export const getPosts = async (page = 1) => { 
  const {data } = await axios.get(`/posts?page=${page}`)

  return data.data;
}



export const getComments = async (postId, page = 1) => {
  const {data} = await axios.get("/comments/", {
      params : {
          page,// : page,
          postId : postId
      }
    });

    return data.data;
}




export const postComments = ({postId, content}) => {  
  return axios.post(`/comments?postId=${postId}&content=${content}`);
}




export const postComments2 =  async (form) => {
  return await axios.post("/comments", {
    params : {
      ...form
    }
  })
  //.then((res) => console.log(res))
  ;
}



export const deleteComments = (commentId) => {
  const {data} = axios.delete(`/comments/${commentId}`);

  return data;
};





export const getPostById = async (postId) => { 
  const {data} = await axios.get(`/posts/${postId}`);

  return data.data;
}


export const convertUrl = async (url) => { 

  const res = await axios.patch(url);
  const data = await res.blob();
  const ext = url.split(".").pop();  // 확장자
  const fileName = url.split("/").pop(); // 파일명
  const metaData = { type : `image/${ext}`};

  return new File([data], fileName, metaData);
}



export const searchUser = async (name) => { 
  //const {data} = await axios.get(`/users/search?name=${name}`);

  const {data} = await axios.get("/users/search", {
    params : { 
      name : name
    }
  });

  return data;
}


export const getUserById = async (id) => { 
  const { data } = await axios.get("/users/" + id);
  return data.data
}



export const getUserPost = async (id) => { 
  const { data } = await axios.get("/posts/author/" + id);
  return data.data
}


