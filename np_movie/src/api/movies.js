import axios from "axios";

// axios 기본 설정
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers = {
    Authorization : `Bearer ${process.env.REACT_APP_TMBD_TOKEN}`
}

export async function getPopular(page = 1) {

    const {data} = await axios.get(`/movie/popular`, {
        params : {
            language : "ko-KR",
            page : page
        }
    });
    
    return data.results;
}



export async function getDetail(id) {

    try {
        const {data} = await axios.get(`/movie/${id}`, {
            params : {
                language : "ko-KR"
            }
        });
        return data;
    }
    catch(error) {
        
        throw new Error("데이터를 불러오는데 실패했습니다.");
    }

}