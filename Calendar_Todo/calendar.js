const init = {
  monthList: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  dayList: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  today: new Date(),
  month: new Date().getMonth(),
  getFirstDay: (yy, mm) => new Date(yy, mm, 1), // .getDate() > 첫 날
  getLastDay: (yy, mm) => new Date(yy, mm + 1, 0), // .getDate() > 마지막 날
  selectedDay: null, // 선택한 날짜
  prevMonth: function() {
    // 이전 달 버튼
    let day = new Date();
    day.setDate(1);
    day.setMonth(--this.month); // 월 - 1
    return day;
  },
  nextMonth: function() {
    // 다음 달 버튼
    let day = new Date();
    day.setDate(1);
    day.setMonth(++this.month);
    return day; // 날짜를 반환함
  }
};

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const calBody = document.querySelector(".cal_body");

// 달력 load Func
const loadCalendar = fullDate => {
  let yy = fullDate.getFullYear();
  let mm = fullDate.getMonth();
  let firstDay = init.getFirstDay(yy, mm); // 첫 날
  let lastDay = init.getLastDay(yy, mm); // 마지막 날
  let markToday; // 오늘 날짜 표시

  // calendar header 수정( yy-mm )
  document.querySelector(".cal_year").innerHTML = `${yy}`;
  document.querySelector(".cal_month").innerHTML = `${init.monthList[mm]}`;

  if (yy === init.today.getFullYear() && mm === init.today.getMonth()) {
    markToday = init.today.getDate();
  }

  let trtd = "";
  let startCount = false; // 날짜가 시작했는지 여부
  let countDay = 1; // date

  for (let i = 0; i < 6; i++) {
    // 행: 주
    trtd += "<tr>";
    for (let j = 0; j < 7; j++) {
      // 열: 요일
      // 날짜 시작: 1일
      if (i === 0 && !startCount && j === firstDay.getDay()) {
        startCount = true;
      }
      // 날짜가 시작 x
      if (!startCount) {
        trtd += "<td>";
      } else {
        // 날짜 시작
        trtd += "<td class='cal_day ";
        trtd += markToday && markToday === countDay ? "today' " : "'";
        trtd += `data-date=${countDay} data-fDate=${yy}.${mm}.${countDay}>` ;
      }
      // text
      trtd += startCount ? countDay++ : "";
      // 마지막 날짜
      trtd += "</td>";
      if (countDay === lastDay.getDate() + 1) {
        startCount = false;
      }

      // local 저장소 체크
      // let fDate = `${yy}.${mm}.${countDay}`;
      // // console.log(fDate)
      // const todos = JSON.parse(localStorage.getItem(`${fDate}`));  
      // if(todos){
      //   console.log(fDate)
      //   console.log(countDay)
      //   console.log(todos);
      // }

    }
    trtd += "</tr>";
  }
  calBody.innerHTML = trtd; // calendar html 삽입
};

const loadDate = (date, day) => {
  document.querySelector(".date").innerHTML = date;
  document.querySelector(".day").innerHTML = init.dayList[day];
};

// 날짜 선택 func
const onSelect = e => {

  if (e.target.classList.contains("cal_day")) {
    // 이미 선택된 날짜가 있을 때 기존 selected 클래스 제거
    if (init.selectedDay) {
      init.selectedDay.classList.remove("selected");
    }
    // 선택한 날짜에 selected 클래스 추가
    const activeDay = e.target;
    activeDay.classList.add("selected");
    // console.log(activeDay)
    init.selectedDay = activeDay;
    // 좌측 요일 날짜 변경
    loadDate(init.selectedDay.innerHTML, init.selectedDay.cellIndex);


  };


  // 선택한 날짜로 설정
  todo_init.FullDate = init.selectedDay.dataset.fdate;
  todo_init.todos = [];
  // 날짜별 todos 출력
  load_todos();


  // console.log(e.target);
};

// 처음 달력 로드
loadCalendar(init.today);
// today 날짜 로드
loadDate(init.today.getDate(), init.today.getDay());

// 이전, 다음 달 선택 후 loadCalendar
prevBtn.addEventListener("click", () => loadCalendar(init.prevMonth()));
nextBtn.addEventListener("click", () => loadCalendar(init.nextMonth()));

// 클릭한 요일에 selected 클래스 추가하고 나머지는 제거
calBody.addEventListener("click", onSelect);

