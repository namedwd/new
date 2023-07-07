import React, { useState } from "react";
import Head from "next/head";

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
          <h2 className="text-xl font-bold text-gray-700 mt-8">
            디데이 계산기란?
          </h2>
          <p className="mt-2 text-gray-700">
            디데이 계산기는 특정 날짜를 기준으로 몇일이 지났는지 혹은 얼마나
            남았는지를 계산해주는 도구입니다. 사용자는 특정 이벤트에 대한
            카운트다운이 필요할 때나, 이미 지나간 날짜를 기준으로 경과된 일자를
            알고 싶을 때 사용할 수 있습니다. 디데이는 Decision Day의 약자로,
            중요한 날 혹은 특별한 날을 지칭하는 말입니다.
          </p>
          <h2 className="text-xl font-bold text-gray-700 mt-8">
            디데이 계산기 사용 방법
          </h2>
          <p className="mt-2 text-gray-700">
            디데이 계산기를 사용하는 방법은 간단합니다. 먼저, 디데이를
            계산하고자 하는 날짜를 입력해야 합니다. 입력은 연도, 월, 일 순으로
            진행되며, 각 입력란에 해당하는 값을 입력해주면 됩니다. 입력란에 값이
            모두 입력된 후 디데이 계산하기 버튼을 클릭하면 입력한 날짜에 따른
            디데이 계산 결과가 화면에 표시됩니다. 과거의 날짜를 입력한 경우,
            입력하신 날짜부터 xx일 지났습니다.라는 결과를 볼 수 있으며, 미래의
            날짜를 입력한 경우 입력하신 날짜까지 xx일 남았습니다.라는 결과를
            확인하실 수 있습니다.
          </p>
        </div>
      </>
    );
}

export default DDayCalculator;
