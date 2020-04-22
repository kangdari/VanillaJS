const API_POINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

// 상태 코드에 따른 에러 메시지 분리
const api = {
  fetchCats: async (keyword) => {
    const data = await fetch(`${API_POINT}/api/cats/search?q=${keyword}`);
    if (data.status === 200) {
      return data.json();
    } else {
      console.error(`${data.status}에러 발생`);
    }
  },
  fetchCatInfo: async (id) => {
    const data = await fetch(`${API_POINT}/api/cats/${id}`);
    if (data.status === 200) {
      return data.json();
    } else {
      console.error(`${data.status}에러 발생`);
    }
  },
  // 고양이 랜덤 정보 api, /api/cats/random50
  fetchRandomCats: async () => {
    const data = await fetch(`${API_POINT}/api/cats/random50`);
    if (data.status === 200) {
      return data.json();
    } else {
      console.error(`${data.status}에러 발생`);
    }
  },
};

// ES8) async / await 문 사용
// const api = {
//   fetchCats: async (keyword) => {
//     try {
//       const data = await fetch(`${API_POINT}/api/cats/search?q=${keyword}`);
//       console.log(data);
//       error;
//       return data.json();
//     } catch (err) {
//       console.error(err);
//     }
//   },
//   // 고양이 상세 정보 api, /cats/:id 요청
//   fetchCatInfo: async (id) => {
//     try {
//       const data = await fetch(`${API_POINT}/api/cats/${id}`);
//       return data.json();
//     } catch (err) {
//       console.error(err);
//     }
//   },
//   // 고양이 랜덤 정보 api, /api/cats/random50
//   fetchRandomCats: async () => {
//     try {
//       const data = await fetch(`${API_POINT}/api/cats/random50`);
//       return data.json();
//     } catch (err) {
//       console.error(err);
//     }
//   },
// };

// 기존 fetch 문
// const api = {
//   fetchCats: (keyword) => {
//     return fetch(`${API_POINT}/api/cats/search?q=${keyword}`).then((res) =>
//       res.json()
//     );
//   },
//   // 고양이 상세 정보 api, /cats/:id 요청
//   fetchCatInfo: (id) => {
//     return fetch(`${API_POINT}/api/cats/${id}`).then((res) => res.json());
//   },
//   // 고양이 랜덤 정보 api, /api/cats/random50
//   fetchRandomCats: () => {
//     return fetch(`${API_POINT}/api/cats/random50`).then((res) => res.json());
//   },
// };
