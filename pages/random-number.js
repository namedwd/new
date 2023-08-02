// pages/random-number.js
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Ad from "@/components/Ad";

export default function RandomNumberGenerator() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [count, setCount] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setNumbers([]);

    const startNum = parseInt(start);
    const endNum = parseInt(end);
    const countNum = parseInt(count);

    if (startNum >= endNum) {
      setError("끝 숫자는 시작 숫자보다 커야합니다.");
      return;
    }

    if (countNum > endNum - startNum + 1) {
      setError("추출 갯수가 숫자 범위를 초과했습니다.");
      return;
    }

    if (countNum > 1000) {
      setError("추출 갯수는 1,000을 초과할 수 없습니다.");
      return;
    }
    if (!start || !end || !count) {
      setError("모든 입력칸을 채워주세요.");
      return;
    }
    let nums = [];
    while (nums.length < countNum) {
      let num = Math.floor(Math.random() * (endNum - startNum + 1) + startNum);
      if (!nums.includes(num)) {
        nums.push(num);
      }
    }

    nums.sort((a, b) => a - b);
    setNumbers(nums);
  };

  return (
    <>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9338031027037605"
          crossorigin="anonymous"
        ></script>
        <title>랜덤 숫자 뽑기 | 파민</title>
        <meta
          name="description"
          content="간단하게 랜덤 숫자를 생성하는 웹페이지입니다. 이 페이지를 통해 언제든지 무작위 숫자를 뽑아 볼 수 있습니다. 또한, 이 임의의 숫자 생성기는 다양한 상황에서 유용하게 사용될 수 있습니다."
        />
        <meta
          name="keywords"
          content="랜덤, 숫자, 뽑기, 생성, 무작위, 추출, 임의, 생성기, 번호"
        />
        <meta property="og:title" content="랜덤 숫자 뽑기 | 파민" />
        <meta
          property="og:description"
          content="간단하게 랜덤 숫자를 생성하는 웹페이지입니다. 이 페이지를 통해 언제든지 무작위 숫자를 뽑아 볼 수 있습니다. 또한, 이 임의의 숫자 생성기는 다양한 상황에서 유용하게 사용될 수 있습니다."
        />
        {/* <meta property="og:url" content="http://yourwebsite.com" /> */}
        <meta property="og:type" content="website" />
        {/* <link rel="canonical" href="http://yourwebsite.com" /> */}
      </Head>
      <div className="container mx-auto p-4 flex justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-2xl text-center mb-4">랜덤 숫자 뽑기 - 파민</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-2 items-center mb-4"
          >
            <div className="w-full flex space-x-2">
              <input
                type="number"
                placeholder="시작 숫자"
                value={start}
                onChange={(e) => setStart(e.target.value)}
                className="flex-1 p-2 border rounded"
                inputMode="numeric"
              />
              <input
                type="number"
                placeholder="끝 숫자"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
                className="flex-1 p-2 border rounded"
                inputMode="numeric"
              />
              <input
                type="number"
                placeholder="추출 갯수"
                value={count}
                onChange={(e) => setCount(e.target.value)}
                className="flex-1 p-2 border rounded"
                inputMode="numeric"
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded mt-2"
            >
              생성
            </button>
          </form>
          {error && <p className="text-red-500">{error}</p>}
          {numbers.length > 0 && (
            <p className="text-green-500 text-xl">{numbers.join(", ")}</p>
          )}
          <Ad />
          <section className="mt-10">
            <p className="mb-2">
              랜덤 숫자 뽑기는 모든 종류의 게임, 추첨, 시뮬레이션에서 중요한
              역할을 합니다. 우리의 일상에서도 랜덤 숫자 뽑기는 다양한 용도로
              활용됩니다. 본 글에서는 시작숫자, 끝숫자, 추출갯수를 입력하여 중복
              없이 순서대로 추출갯수만큼 무작위 번호를 추출하는 방법을
              소개하겠습니다.
            </p>
            <div className="w-full">
              <Image
                src="/images/랜덤 숫자 뽑기.jpg"
                alt="랜덤 숫자 뽑기 설명 이미지"
                layout="responsive"
                width={400} // 원본 이미지 너비
                height={200} // 원본 이미지 높이
              />
            </div>
            <h2 className="text-lg mb-2">
              1. 사용의 간편함: 랜덤 숫자 뽑기 도구
            </h2>
            <p className="mb-2">
              시작숫자와 끝숫자를 지정하고, 원하는 추출갯수만큼 무작위 번호를
              추출하는 이 도구는 누구나 쉽게 사용할 수 있습니다. 이 방법은 로또
              번호 생성, 무작위 샘플링, 실험 디자인 등에 사용될 수 있습니다.
            </p>
            <h2 className="text-lg mb-2">
              2. 중복 없이 추출: 효과적인 알고리즘
            </h2>
            <p className="mb-2">
              이 도구의 핵심은 중복 없이 숫자를 추출하는 것입니다. 랜덤 숫자
              뽑기에서 중복은 원치 않는 결과를 초래할 수 있으므로, 중복 없이
              추출하는 기능은 매우 중요합니다.
            </p>
            <h2 className="text-lg mb-2">
              3. 확장성과 유용성: 여러 분야에 적용
            </h2>
            <p className="mb-2">
              시작숫자부터 끝숫자까지 랜덤하게 숫자를 뽑는 이 기능은 다양한
              분야에서 활용될 수 있습니다. 교육, 연구, 마케팅 등에서 이 도구를
              효과적으로 사용할 수 있습니다.
            </p>
            <h2 className="text-lg mb-2">4. 안정성과 신뢰성: 공정한 랜덤화</h2>
            <p className="mb-2">
              이 도구는 공정한 랜덤화를 제공하며, 모든 숫자가 동일한 확률로 뽑힐
              수 있도록 설계되었습니다. 이로 인해 랜덤 숫자 뽑기의 정확도와
              신뢰성이 높아집니다.
            </p>
            <h2 className="text-lg mb-2">결론</h2>
            <p className="mb-2">
              시작숫자부터 끝숫자까지 랜덤 숫자를 뽑는 이 도구는 다양한 분야에서
              활용될 수 있습니다. 중복 없이 순서대로 추출갯수만큼 무작위 번호를
              추출하는 기능은 이 도구를 독특하고 유용하게 만듭니다. 무엇을
              기다리고 계신가요? 지금 바로 이 무작위 번호 추출 도구를 사용해
              보세요!
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
