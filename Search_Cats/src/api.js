const API_POINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const api = {
  fetchCats: (keyword) => {
    return fetch(`${API_POINT}/api/cats/search?q=${keyword}`).then((res) =>
      res.json()
    );
  },
  // 고양이 상세 정보 api, /cats/:id 요청
  fetchCatInfo: (id) => {
    return fetch(`${API_POINT}/api/cats/${id}`).then((res) => res.json());
  },
  // 고양이 랜덤 정보 api, /api/cats/random50
  fetchRandomCats: () => {
    return fetch(`${API_POINT}/api/cats/random50`).then((res) => res.json());
  },

  // fetchCats: (keyword) => {
  //     // axios를 사용하면 Promise를 반환하면서 Json parsing 자동
  //     return axios
  //     .get(`${API_POINT}/api/cats/search?q=${keyword}`)
  // },
};
