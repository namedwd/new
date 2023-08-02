import React, { useState, useEffect } from "react";
import Head from "next/head";
import Ad from "@/components/Ad";

function AgeCalculator() {
  const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [baseYear, setBaseYear] = useState("");
  const [baseMonth, setBaseMonth] = useState("");
  const [baseDay, setBaseDay] = useState("");
  const [age, setAge] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    setBaseYear(year);
    setBaseMonth(month);
    setBaseDay(day);
  }, []);

  const isValidDate = (year, month, day) => {
    let date = new Date(year, month - 1, day);
    return (
      date &&
      date.getFullYear() == year &&
      date.getMonth() == month - 1 &&
      date.getDate() == day
    );
  };

  const calculateAge = (e) => {
    e.preventDefault();

    if (!isValidDate(birthYear, birthMonth, birthDay)) {
      setError("유효한 생년월일이 아닙니다.");
      return;
    }

    if (!isValidDate(baseYear, baseMonth, baseDay)) {
      setError("유효한 기준일이 아닙니다.");
      return;
    }

    let birthDate = new Date(birthYear, birthMonth - 1, birthDay);
    let baseDate = new Date(baseYear, baseMonth - 1, baseDay);

    if (birthDate > baseDate) {
      setError("생년월일이 기준일보다 미래 날짜입니다.");
      return;
    }

    let age = baseYear - birthYear;

    if (
      baseMonth < birthMonth ||
      (baseMonth === birthMonth && baseDay < birthDay)
    ) {
      age--;
    }

    setAge(age);
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
          <title>만나이 계산기 | 당신의 만나이를 정확하게 계산해드립니다</title>
          <meta
            name="description"
            content="만나이 계산기를 사용하면 간편하게 정확한 만나이를 계산할 수 있습니다. 당신의 출생일을 입력하면 즉시 만나이를 알려드립니다. 만나이 통일법에 따라 바뀐 만 나이를 확인해보세요."
          />
          <meta
            name="keywords"
            content="만나이, 계산기, 나이계산, 생일, 생년월일, 만나이 계산기"
          />
          <meta
            property="og:title"
            content="만나이 계산기 | 당신의 만나이를 정확하게 계산해드립니다"
          />
          <meta
            property="og:description"
            content="우리의 만나이 계산기를 사용하면 간편하게 정확한 만나이를 계산할 수 있습니다. 당신의 출생일을 입력하면 즉시 만나이를 알려드립니다."
          />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="만나이 계산기 | 당신의 만나이를 정확하게 계산해드립니다"
          />
          <meta
            name="twitter:description"
            content="우리의 만나이 계산기를 사용하면 간편하게 정확한 만나이를 계산할 수 있습니다. 당신의 출생일을 입력하면 즉시 만나이를 알려드립니다."
          />

          {/*이미지가 있다면 URL을 이곳에 넣으세요*/}
        </Head>
        <div className="flex flex-col items-center justify-center py-2 px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-3xl font-bold">만나이 계산기</h1>
          <form onSubmit={calculateAge} className="space-y-4">
            <div className="w-full">
              <p className="mb-2 font-semibold">생년월일:</p>
              <div className="flex space-x-4">
                <input
                  type="number"
                  placeholder="Year"
                  onChange={(e) => setBirthYear(e.target.value)}
                  className="w-full p-2 text-lg rounded shadow"
                  maxLength="4"
                  inputMode="numeric"
                />
                <input
                  type="number"
                  placeholder="Month"
                  min="1"
                  max="12"
                  onChange={(e) => setBirthMonth(e.target.value)}
                  className="w-full p-2 text-lg rounded shadow"
                  maxLength="2"
                  inputMode="numeric"
                />
                <input
                  type="number"
                  placeholder="Day"
                  min="1"
                  max="31"
                  onChange={(e) => setBirthDay(e.target.value)}
                  className="w-full p-2 text-lg rounded shadow"
                  maxLength="2"
                  inputMode="numeric"
                />
              </div>
            </div>
            <div className="w-full">
              <p className="mb-2 font-semibold">기준일:</p>
              <div className="flex space-x-4">
                <input
                  type="number"
                  placeholder="Year"
                  value={baseYear}
                  onChange={(e) => setBaseYear(e.target.value)}
                  className="w-full p-2 text-lg rounded shadow"
                  maxLength="4"
                  inputMode="numeric"
                />
                <input
                  type="number"
                  placeholder="Month"
                  min="1"
                  max="12"
                  value={baseMonth}
                  onChange={(e) => setBaseMonth(e.target.value)}
                  className="w-full p-2 text-lg rounded shadow"
                  maxLength="2"
                  inputMode="numeric"
                />
                <input
                  type="number"
                  placeholder="Day"
                  min="1"
                  max="31"
                  value={baseDay}
                  onChange={(e) => setBaseDay(e.target.value)}
                  className="w-full p-2 text-lg rounded shadow"
                  maxLength="2"
                  inputMode="numeric"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              만 나이 계산하기
            </button>
            {error && <p className="mt-2 text-red-500">{error}</p>}
            {age && (
              <h2 className="mt-8 text-2xl font-bold">
                결과 : 만 {age}세 입니다.
              </h2>
            )}
          </form>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            한국의 만 나이 통일법을 반영한 정확한 만 나이 계산
          </h2>
          <div>
            <Ad />
          </div>
          <p className="mb-4">
            2023년 6월 28일부터 시행된 한국의 만 나이 통일법은 나이 계산 방식을
            변경하였습니다. 이에 따라 만 나이 계산기 웹사이트를 소개합니다. 해당
            웹사이트를 통해 손쉽게 만 나이를 계산할 수 있습니다.
          </p>

          <h3 className="text-lg font-semibold mb-2">1. 만 나이 계산 방식</h3>
          <p className="mb-4">
            만 나이는 출생일을 기준으로 0살로 시작하여 생일이 지날 때마다 1살씩
            더해가는 방식으로 계산됩니다. 따라서 개인의 생일에 따라 나이가
            달라집니다.
          </p>

          <h3 className="text-lg font-semibold mb-2">2. 취학 의무 연령</h3>
          <p className="mb-4">
            취학 의무 연령은 만 6세입니다. 종전과 동일하게 만 6세가 된 날이
            속하는 해의 다음 해 3월 1일에 입학합니다.
          </p>

          <h3 className="text-lg font-semibold mb-2">3. 호칭 사용</h3>
          <p className="mb-4">
            만 나이를 사용하면 같은 반 내에서도 생일에 따라 학생들의 나이가
            달라질 수 있습니다. 하지만 호칭에 있어서는 생년월일에 따라 엄격하게
            구분할 필요는 없습니다. 한두 살 차이를 엄격하게 따지는 서열문화도
            점점 사라질 것으로 예상됩니다.
          </p>

          <h3 className="text-lg font-semibold mb-2">
            4. 칠순, 팔순 등의 기념일
          </h3>
          <p className="mb-4">
            한국식 나이로 기념일을 계산하는 관습은 오랫동안 형성되어 왔기
            때문에, 현재의 만 나이 통일법에서는 이러한 기념일 계산 방식을
            변경하지 않을 예정입니다. 그러나 만 나이 사용 문화가 정착되면 다른
            나라에서와 같이 칠순, 팔순 등의 기념일도 자연스럽게 만 나이 기준으로
            변화할 것으로 예상됩니다.
          </p>

          <h3 className="text-lg font-semibold mb-2">5. 연 나이 계산</h3>
          <p className="mb-4">
            일부 법령에서 사용되는 연 나이는 개인의 생일과는 상관없이 현재
            연도에서 출생 연도를 뺀 값으로 계산됩니다. 연 나이는 특정 분야에서만
            사용되며, 대부분의 경우 만 나이로 통일될 예정입니다.
          </p>

          <h3 className="text-lg font-semibold mb-2">
            6. 주민등록증, 운전면허증 등의 유효성
          </h3>
          <p className="mb-4">
            한국에서 발급된 주민등록증, 운전면허증 등은 만 나이 통일법의
            시행으로 인해 변화가 없으며, 그대로 유효합니다. 법령상 나이는 특별한
            규정이 없으면 만 나이 기준으로 적용됩니다.
          </p>

          <p>
            이 웹사이트는 한국의 만 나이 통일법을 기반으로 만든 만 나이
            계산기로서, 사용자들에게 정확한 만 나이 계산을 제공합니다. 이를 통해
            나이 계산에 관련된 혼동을 방지하고, 한국 사회에서 만 나이의 표준화를
            이루어나가는 데 기여하고자 합니다.
          </p>
        </div>
      </>
    );
}

export default AgeCalculator;
