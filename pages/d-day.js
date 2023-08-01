import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";

const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const weekDay = weekDays[today.getDay()];
  return { year, month, day, weekDay };
}


function DDayCalculator() {
  const [eventYear, setEventYear] = useState("");
  const [eventMonth, setEventMonth] = useState("");
  const [eventDay, setEventDay] = useState("");
  const [dDay, setDDay] = useState();
  const [error, setError] = useState("");
  const currentDate = getCurrentDate();

  const isValidDate = (year, month, day) => {
    const date = new Date(year, month - 1, day);
    return (
      date &&
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    );
  };

  const calculateDDay = (e) => {
    e.preventDefault();

    const eventYearNum = Number(eventYear);
    const eventMonthNum = Number(eventMonth);
    const eventDayNum = Number(eventDay);

    if (
      !isValidDate(eventYearNum, eventMonthNum, eventDayNum) ||
      eventYear.length !== 4 ||
      eventMonth.length > 2 ||
      eventDay.length > 2
    ) {
      setError("올바른 날짜를 입력해주세요.");
      return;
    }

    let eventDate = new Date(eventYearNum, eventMonthNum - 1, eventDayNum);
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    let diff = eventDate.getTime() - today.getTime();
    let dDay = Math.ceil(diff / (1000 * 60 * 60 * 24));
    let weekDay = weekDays[eventDate.getDay()];

    setDDay({
      year: eventYear,
      month: eventMonth,
      day: eventDay,
      weekDay: weekDay,
      dDay: dDay,
      isFuture: diff >= 0,
    });
    setError("");
  };

    return (
      <>
        <Head>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9338031027037605"
            crossorigin="anonymous"
          ></script>
          <title>디데이 계산기 - 특별한 날을 기다리며</title>
          <meta
            name="description"
            content="디데이 계산기를 이용하면 특별한 날짜가 얼마나 남았는지 또는 얼마나 지났는지를 손쉽게 확인할 수 있습니다. 중요한 이벤트나 행사, 기념일, 전역일 등을 기다리며 남은 일수를 계산해보세요. 디데이 계산기로 경과일이나 잔여일을 알아보세요."
          />
          <meta
            name="keywords"
            content="디데이, 디데이 계산기, 날짜 계산, 경과일 계산, 남은 일자 계산, 이벤트 D-day, 기념일 D-day, 전역일 D-day"
          />
          <meta
            property="og:title"
            content="디데이 계산기 - 전역일, 특별한 날을 기다리며"
          />
          <meta
            property="og:description"
            content="디데이 계산기를 이용하면 특별한 날짜가 얼마나 남았는지 또는 얼마나 지났는지를 손쉽게 확인할 수 있습니다. 중요한 이벤트나 행사, 기념일, 전역일 등을 기다리며 남은 일수를 계산해보세요. 디데이 계산기로 경과일이나 잔여일을 알아보세요."
          />
          <meta property="og:type" content="website" />
        </Head>
        <div className="mx-auto w-full max-w-md px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-xl font-bold text-gray-700">D-Day 계산기</h1>
          <p className="mb-4">
            오늘의 날짜:{" "}
            {`${currentDate.year}년 ${currentDate.month}월 ${currentDate.day}일 ${currentDate.weekDay}요일`}
          </p>
          <form onSubmit={calculateDDay} className="space-y-4 mb-8">
            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="Year"
                onChange={(e) => setEventYear(e.target.value)}
                className="flex-1 border rounded-md p-2"
                maxLength={4}
              />
              <input
                type="number"
                placeholder="Month"
                min="1"
                max="12"
                onChange={(e) => setEventMonth(e.target.value)}
                className="flex-1 border rounded-md p-2"
                maxLength={2}
              />
              <input
                type="number"
                placeholder="Day"
                min="1"
                max="31"
                onChange={(e) => setEventDay(e.target.value)}
                className="flex-1 border rounded-md p-2"
                maxLength={2}
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            >
              D-Day 계산하기
            </button>
            {error && <p className="text-red-500">{error}</p>}
            {dDay && (
              <div className="p-4 border-2 border-blue-500 rounded-md">
                <p className="text-lg font-bold">
                  {`${dDay.year}년 ${dDay.month}월 ${dDay.day}일 ${
                    dDay.weekDay
                  }요일${dDay.isFuture ? "까지 " : "부터 "}`}
                </p>
                <p className="text-blue-500">
                  {` ${Math.abs(dDay.dDay)}일 ${
                    dDay.isFuture ? "남았습니다." : "지났습니다."
                  }`}
                </p>
              </div>
            )}
          </form>
          <p className="mt-2 text-gray-700">
            모든 날짜 계산에 필요한 원스톱 솔루션인 디데이 계산기에 오신 것을
            환영합니다! 특별한 날을 표시하거나, 두 날짜 사이의 시간 간격을
            측정하거나, 향후 이벤트를 미리 계획할 때, 날짜 계산기가 정확하고
            간단하게 도와드립니다.
          </p>
          <h2 className="text-xl font-bold text-gray-700 mt-8">
            디데이 계산기란 무엇인가요?
          </h2>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <Image
              src="/images/디데이 계산기.jpg"
              alt="디데이 계산기 설명 이미지"
              layout="responsive"
              width={400} // 원본 이미지 너비
              height={200} // 원본 이미지 높이
            />
          </div>
          <p className="mt-2 text-gray-700">
            디데이 계산기는 오늘 날짜와 지정한 미래 또는 과거 날짜 사이의 일수를
            계산하는 무료 온라인 도구입니다. 위의 양식에 연도, 월, 일을 입력하면
            남은 일수 또는 경과한 일수를 빠르게 확인할 수 있습니다.
          </p>
          <h2 class="text-xl font-bold text-gray-700 mt-8">
            디데이 계산 도구를 사용하는 이유는 무엇인가요?
          </h2>
          <h3 class="text-lg font-bold text-gray-600 mt-4">이벤트 계획</h3>
          <p class="mt-2 text-gray-700">
            결혼식, 생일 또는 기타 이벤트를 계획 중이신가요? 이 도구를 사용해
            정확한 남은 일수를 확인하세요.
          </p>
          <h3 class="text-lg font-bold text-gray-600 mt-4">비즈니스 니즈</h3>
          <p class="mt-2 text-gray-700">
            프로젝트 마감일, 납기일 또는 모든 비즈니스 요구사항에 대한 기간을
            계산하세요.
          </p>
          <h3 class="text-lg font-bold text-gray-600 mt-4">개인 목표</h3>
          <p class="mt-2 text-gray-700">
            기념일, 졸업, 은퇴와 같은 개인적 이정표까지 남은 날짜를 추적하세요.
          </p>
          <h3 class="text-lg font-bold text-gray-600 mt-4">특징</h3>
          <ul class="mt-2 text-gray-700">
            <li>간편한 입력 및 빠른 결과</li>
            <li>다양한 사용법</li>
            <li>정확한 계산</li>
            <li>무료 온라인 도구</li>
          </ul>
          <h3 class="text-lg font-bold text-gray-600 mt-4">
            디데이 계산기 사용 방법
          </h3>
          <p class="mt-2 text-gray-700">
            연도, 월, 일을 입력합니다 -&gt; 계산하기 버튼을 클릭합니다 -&gt;
            결과 보기.
          </p>
          <h3 class="text-lg font-bold text-gray-600 mt-4">디데이의 유래</h3>
          <p class="mt-2 text-gray-700">
            디데이는 원래 1944년 6월 6일, 제2차 세계 대전 동안 연합군이 나치
            독일이 점령한 프랑스 노르망디 해안에 상륙한 날을 가리키는 용어로
            사용되었습니다. 이후에는 계획된 중요한 이벤트가 발생할 날짜를
            일반적으로 나타내는 단어로 널리 쓰이게 되었습니다.
          </p>
        </div>
      </>
    );
}

export default DDayCalculator;
