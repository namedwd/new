// pages/random-number.js
import { useState } from "react";
import Head from "next/head";

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
          <h1 className="text-2xl text-center mb-4">
            랜덤 숫자 뽑기: 프로그램 사용 방법
          </h1>
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
              />
              <input
                type="number"
                placeholder="끝 숫자"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
                className="flex-1 p-2 border rounded"
              />
              <input
                type="number"
                placeholder="추출 갯수"
                value={count}
                onChange={(e) => setCount(e.target.value)}
                className="flex-1 p-2 border rounded"
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
          <section className="mt-10">
            <h2 className="text-xl mb-4">
              랜덤 숫자 뽑기: 완벽한 가이드와 사용 방법
            </h2>
            <p className="mb-2">
              랜덤 숫자는 수많은 분야에서 중요한 역할을 합니다. 이러한 숫자는
              균일한 분포에서 동일한 확률로 선정되므로, 예측이 불가능합니다. 이
              글에서는 랜덤 숫자의 중요성과 이를 어떻게 뽑아내는지에 대한 방법을
              안내해드립니다.
            </p>
            <h2 className="text-lg mb-2">랜덤 숫자의 중요성</h2>
            <p className="mb-2">
              랜덤 숫자는 게임의 무작위 요소부터 통계적 샘플링, 컴퓨터
              보안에서의 암호 생성에 이르기까지 다양한 분야에서 활용됩니다. 이는
              각 숫자가 동일한 확률로 선정되므로, 예측이 불가능하기 때문입니다.
            </p>
            <h2 className="text-lg mb-2">랜덤 숫자 추출 방법</h2>
            <p className="mb-2">
              랜덤 숫자를 추출하는 방법에는 다양한 것들이 있습니다. 가장 간단한
              방법으로는 주사위를 굴리는 것, 복권 추첨 등이 있습니다. 하지만
              이러한 방법들은 대량의 랜덤 숫자를 신속하게 생성하기에는
              제한적입니다. 그래서 대부분은 컴퓨터 기반의 알고리즘을 사용하여
              랜덤 숫자를 생성합니다.
            </p>
            <h2 className="text-lg mb-2">랜덤 숫자의 활용</h2>
            <p className="mb-2">
              랜덤 숫자는 다양한 분야에서 활용됩니다. 예를 들어, 복권 추첨이나
              게임에서 랜덤 요소를 생성하거나, 통계 샘플링에서 데이터 세트를
              선택하거나, 컴퓨터 보안에서 암호를 생성하는 등의 용도로
              사용됩니다. 또한, 랜덤 숫자는 컴퓨터 시뮬레이션, 신경과학, 양자
              물리학 등과 같은 복잡한 과학적 연구에서도 중요한 역할을 합니다.
            </p>
            <h2 className="text-lg mb-2">마무리</h2>
            <p className="mb-2">
              랜덤 숫자는 과학, 기술, 게임 등 다양한 분야에서 중요한 역할을
              합니다. 랜덤 숫자의 의미와 어떻게 뽑아내는지에 대한 이해는 이러한
              분야에서의 작업을 효과적으로 수행하는데 도움이 될 것입니다.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
