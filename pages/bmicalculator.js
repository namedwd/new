import React, { useState } from "react";
import Head from "next/head";

function BmiCalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState();
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!height || !weight) {
      setError("모든 값을 입력해주세요.");
      return;
    }

    if (height < 100 || height > 250 || weight < 10 || weight > 250) {
      setError("키 또는 몸무게가 범위를 벗어났습니다. 다시 입력해주세요.");
      return;
    }

    let calculatedBmi = (weight / (height / 100) ** 2).toFixed(2);
    

    setBmi(calculatedBmi);
    let calculatedResult = "";

    if (calculatedBmi < 20) {
      calculatedResult = "저체중";
    } else if (calculatedBmi < 25) {
      calculatedResult = "정상";
    } else if (calculatedBmi < 30) {
      calculatedResult = "과체중";
    } else {
      calculatedResult = "비만";
    }

    setResult(
      `BMI측정결과 : 신체질량지수(BMI)는 ${calculatedBmi}로 ${calculatedResult} 입니다. `
    );
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
        <title>비만도 계산기 | 파민</title>
        <meta
          name="description"
          content="간단하게 비만도를 계산하는 웹페이지입니다. 이 페이지를 통해 언제든지 본인의 비만도를 계산해 볼 수 있습니다. 또한, 이 비만도 계산기는 건강 관리에 유용하게 사용될 수 있습니다."
        />
        <meta
          name="keywords"
          content="비만도, 계산, 계산기, 체중, 신장, BMI, 건강"
        />
        <meta property="og:title" content="비만도 계산기 | 파민" />
        <meta
          property="og:description"
          content="간단하게 비만도를 계산하는 웹페이지입니다. 이 페이지를 통해 언제든지 본인의 비만도를 계산해 볼 수 있습니다. 또한, 이 비만도 계산기는 건강 관리에 유용하게 사용될 수 있습니다."
        />
        {/* <meta property="og:url" content="http://yourwebsite.com" /> */}
        <meta property="og:type" content="website" />
        {/* <link rel="canonical" href="http://yourwebsite.com" /> */}
      </Head>
      <div className="flex flex-col items-center justify-center py-2 px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold text-center text-blue-700">
          비만도 계산기(BMI)
        </h1>
        <p className="text-lg text-center text-gray-700 mb-8">
          이 계산기는 신체질량지수(BMI)를 사용하여 체중 상태를 평가합니다. BMI는
          체중(kg)을 신장(m)의 제곱으로 나눈 값입니다.
        </p>
        <form onSubmit={calculateBMI} className="space-y-4">
          <input
            type="number"
            placeholder="키(cm)"
            step="0.01"
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-2 text-lg rounded shadow"
          />
          <input
            type="number"
            placeholder="몸무게(kg)"
            step="0.01"
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-2 text-lg rounded shadow"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            BMI 계산하기
          </button>
          {error && <p className="mt-2 text-red-500">{error}</p>}
          {bmi && (
            <>
              <h2 className="mt-8 text-2xl font-bold">결과</h2>
              <p>{result}</p>
            </>
          )}
        </form>
        <div className="mt-8 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
          <div className="md:grid md:grid-cols-2 md:gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                비만도 계산기(BMI) 판정 기준
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                비만도 계산기는 몸무게와 키를 사용하여 BMI(Body Mass Index)를
                계산하고, 이를 바탕으로 여러 건강상태를 평가합니다. 비만도
                계산기는 개인의 건강상태를 빠르게 이해하는 데 도움이 됩니다.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                BMI는 비만을 판정하는 효과적인 도구로서 전세계적으로 널리
                사용되고 있습니다. 이 지표는 신체의 비만 정도를 객관적이고
                간단하게 평가하는데 도움이 됩니다.
              </p>
              <table className="table-auto my-4">
                <thead>
                  <tr>
                    <th className="px-4 py-2">판정기준</th>
                    <th className="px-4 py-2">BMI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">저체중</td>
                    <td className="border px-4 py-2">20 미만</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">정상</td>
                    <td className="border px-4 py-2">20 - 24.9</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">과체중</td>
                    <td className="border px-4 py-2">25 - 29.9</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">비만</td>
                    <td className="border px-4 py-2">30 이상</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h3 className="mt-4 text-xl font-bold">BMI의 장단점</h3>
              <p className="text-lg text-gray-700 mb-4">
                BMI는 신장에 비례하는 이상적인 체중을 제시하며, 체중 관리에 대한
                대략적인 지침을 제공합니다. 이는 표준체중 대신 체지방을 비교적
                정확하게 반영하므로, 신체 상태를 판단하는 데 효과적입니다.
              </p>
              <h3 className="mt-4 text-xl font-bold">비만의 악영향</h3>
              <p className="text-lg text-gray-700 mb-4">
                비만은 당뇨병, 고혈압, 심장병, 뇌졸중, 일부 유형의 암 등 다양한
                건강 문제를 초래할 수 있습니다. 특히, 중년 이후 비만은 건강
                문제의 주요 원인으로 작용할 수 있습니다.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                비만은 생활습관 질환의 주요 원인으로 인식되며, 이를 조절하는
                것이 중요합니다. BMI는 이러한 관리에 필수적인 도구로서, 비만도
                계산기는 이를 간단하게 이해하는데 도움을 줍니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BmiCalculator;
