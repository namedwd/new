import { useState } from "react";
import Head from "next/head";

function calculateServiceInfo(startDate, serviceType) {
  // 복무 기간을 나타내는 객체
  const servicePeriod = {
    "육군/해병대": 18,
    해군: 20,
    공군: 21,
  };

  const endDate = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate()
  );
  endDate.setMonth(endDate.getMonth() + servicePeriod[serviceType]);
  endDate.setDate(endDate.getDate() - 1);

  const remainingTime = Math.ceil(
    (endDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
  const dischargeDay = weekDays[endDate.getDay()];

  const totalServiceDays = Math.ceil(
    (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  let remainingUntilEnlistmentDays = 0;

  if (startDate > new Date()) {
    remainingUntilEnlistmentDays = Math.ceil(
      (startDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
    );
  }
  let servedDays = 0;
  if (startDate <= new Date() && new Date() <= endDate) {
    servedDays = Math.floor(
      (new Date().getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    );
  }
  return {
    servedDays,
    totalServiceDays,
    remainingServiceDays: remainingTime > 0 ? remainingTime : 0,
    dischargeDate: endDate,
    dischargeDay,
    remainingUntilEnlistmentDays,
  };
}

export default function DischargeDateCalculator() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [serviceInfo, setServiceInfo] = useState({});
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setServiceInfo({});

    if (!year || !month || !day || !serviceType) {
      setError("모든 입력칸을 채워주세요.");
      return;
    }

    const startDate = new Date(year, month - 1, day);

    if (
      startDate.getFullYear() !== parseInt(year) ||
      startDate.getMonth() !== parseInt(month) - 1 ||
      startDate.getDate() !== parseInt(day)
    ) {
      setError("유효하지 않은 날짜입니다.");
      return;
    }

    const info = calculateServiceInfo(startDate, serviceType);
    setServiceInfo(info);
  };

  return (
    <>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9338031027037605"
          crossorigin="anonymous"
        ></script>
        <title>전역일 계산기: 완벽한 가이드와 사용 방법</title>
        <meta
          name="description"
          content="전역일을 정확하게 예측하는 것은 군 복무 기간 동안의 계획을 세우고, 전역 후의 생활 계획을 수립하는데 중요한 척도가 됩니다. 이 웹사이트에서는 전역일의 중요성과 이를 어떻게 계산하는지에 대한 방법을 안내해드립니다."
        />
        <meta name="keywords" content="전역일, 계산기, 복무 종료일, 복무기간" />
        <meta
          property="og:title"
          content="전역일 계산기: 완벽한 가이드와 사용 방법"
        />
        <meta
          property="og:description"
          content="전역일을 정확하게 예측하는 것은 군 복무 기간 동안의 계획을 세우고, 전역 후의 생활 계획을 수립하는데 중요한 척도가 됩니다. 이 웹사이트에서는 전역일의 중요성과 이를 어떻게 계산하는지에 대한 방법을 안내해드립니다."
        />
        {/* <meta property="og:url" content="http://yourwebsite.com" /> */}
        <meta property="og:type" content="website" />
        {/* <link rel="canonical" href="http://yourwebsite.com" /> */}
      </Head>
      <div className="container mx-auto p-4 flex justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-2xl text-center mb-4">
            전역일 계산기: 프로그램 사용 방법
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-2 items-center mb-4"
          >
            <div className="w-full flex space-x-2">
              <input
                type="number"
                placeholder="년"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="flex-1 p-2 border rounded"
              />
              <input
                type="number"
                placeholder="월"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="flex-1 p-2 border rounded"
              />
              <input
                type="number"
                placeholder="일"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="flex-1 p-2 border rounded"
              />
            </div>
            <div className="w-full flex space-x-2">
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="flex-1 p-2 border rounded mt-2"
              >
                <option value="">복무유형 선택</option>
                <option value="육군/해병대">육군/해병대</option>
                <option value="해군">해군</option>
                <option value="공군">공군</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded mt-2"
            >
              복무일 계산하기
            </button>
          </form>
          {error && <p className="text-red-500">{error}</p>}
          {serviceInfo.totalServiceDays && (
            <div className="text-green-500">
              <p>총 복무일: {serviceInfo.totalServiceDays}일</p>
              {serviceInfo.servedDays > 0 && (
                <p>현재까지 복무일: {serviceInfo.servedDays}일</p>
              )}
              {serviceInfo.remainingUntilEnlistmentDays <= 0 &&
                serviceInfo.remainingServiceDays > 0 && (
                  <p>남은 복무일: {serviceInfo.remainingServiceDays}일</p>
                )}
              <p>
                전역일: {serviceInfo.dischargeDate.getFullYear()}년{" "}
                {serviceInfo.dischargeDate.getMonth() + 1}월{" "}
                {serviceInfo.dischargeDate.getDate()}일{" "}
                {serviceInfo.dischargeDay}요일
              </p>
              {serviceInfo.remainingUntilEnlistmentDays > 0 && (
                <p>
                  입대까지 남은 일: {serviceInfo.remainingUntilEnlistmentDays}일
                </p>
              )}
            </div>
          )}
          <section className="mt-10">
            <h2 className="text-xl mb-4">
              전역일 예측하기: 완벽한 가이드와 사용 방법
            </h2>
            <p className="mb-2">
              복무 종료일, 즉 전역일은 국방의 의무를 이행하는 모든 국민들에게
              기다려지는 날입니다. 전역일을 정확하게 예측하는 것은 군 복무 기간
              동안의 계획을 세우고, 전역 후의 생활 계획을 수립하는데 중요한
              척도가 됩니다. 이 글에서는 전역일의 중요성과 이를 어떻게
              계산하는지에 대한 방법을 안내해드립니다.
            </p>
            <h2 className="text-lg mb-2">전역일의 중요성</h2>
            <p className="mb-2">
              전역일은 복무를 마치고 민간 생활로 복귀하는 그 날을 의미합니다.
              이는 군복무를 마치고 새로운 삶을 시작하는 첫걸음이므로, 개인의
              생활 계획에 중요한 지표가 됩니다.
            </p>
            <h2 className="text-lg mb-2">전역일 계산 방법</h2>
            <p className="mb-2">
              전역일을 계산하는 방법은 복무 기간에 따라 다릅니다. 육군과
              해병대의 경우 복무 기간은 1년 6개월, 공군의 경우 21개월, 해군은
              20개월 입니다. 복무 시작일에서 해당 복무 기간을 더하면 전역일을
              계산할 수 있습니다. 단, 이 계산기는 법적 효력이 없으며
              참고용으로만 사용해야 합니다. 그리고 복무 기간은 2023년
              기준입니다.
            </p>
            <h2 className="text-lg mb-2">전역일의 활용</h2>
            <p className="mb-2">
              전역일 예측은 복무 기간 동안 및 복무 후의 일정을 계획하고, 미래의
              활동을 준비하는데 큰 도움이 됩니다. 예를 들어, 취업을 준비하거나
              학업을 재개하거나, 여가 활동을 계획하는 등의 다양한 분야에서
              전역일 정보는 매우 유용합니다.
            </p>
            <h2 className="text-lg mb-2">마무리</h2>
            <p className="mb-2">
              복무 종료일인 전역일은 국방의 의무를 이행하는 국민들에게 중요한
              날입니다. 전역일의 의미와 어떻게 계산하는지에 대한 이해는 복무
              기간 동안의 계획을 세우고, 전역 후의 일정을 조절하는데 큰 도움이
              됩니다.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
