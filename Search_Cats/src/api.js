const API_POINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const api = {
    fetchCats: (keyword) => {
      return fetch(`${API_POINT}/api/cats/search?q=${keyword}`).then((res) =>
        res.json()
      )
    }
    // fetchCats: (keyword) => {
    //     // axios를 사용하면 Promise를 반환하면서 Json parsing 자동
    //     return axios
    //     .get(`${API_POINT}/api/cats/search?q=${keyword}`)
    // },
};
