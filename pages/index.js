import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>파민 - 다양한 툴을 이용해보세요</title>
        <meta
          name="google-site-verification"
          content="WJO596AEWLVZE0WvV8ogLQ0sm-iHwcbPosXfVJ6pmnI"
        />
        <meta
          name="description"
          content="파민에서는 디데이 계산기, 랜덤 숫자 뽑기, 만나이 계산기 등 다양한 툴을 제공합니다. 이 도구들을 통해 여러분의 일상을 더욱 편리하게 만들어보세요."
        />
        <meta
          name="keywords"
          content="디데이 계산기, 랜덤 숫자 뽑기, 만나이 계산기, 파민, 툴, 도구"
        />
        <meta property="og:title" content="랜덤 숫자 뽑기 | 파민" />
        <meta
          property="og:description"
          content="파민에서는 디데이 계산기, 랜덤 숫자 뽑기, 만나이 계산기 등 다양한 툴을 제공합니다. 이 도구들을 통해 여러분의 일상을 더욱 편리하게 만들어보세요."
        />
        {/* <meta property="og:url" content="http://yourwebsite.com" /> */}
        <meta property="og:type" content="website" />
        {/* <link rel="canonical" href="http://yourwebsite.com" /> */}
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 px-4 sm:px-6 lg:px-8">
        <h1 className="mt-6 text-4xl font-bold text-gray-900">
          파민의 유용한 계산기 모음입니다!
        </h1>
        <p className="mt-3 text-lg text-gray-700 mx-2 sm:mx-0">
          먼저, 파민에 오신 것을 진심으로 환영합니다. 파민은 더 많은 가능성, 더
          많은 선택, 그리고 더 많은 편리함을 선사하는 여러분의 디지털
          파트너입니다.
          <br />
          <br />
          우리는 랜덤 숫자 생성, 디데이 계산, 전역일 계산과 같은 일상의 다양한
          요소를 관리하는 데 도움이 되는 도구들을 제공합니다. 모든 것이 한
          곳에서 이루어지는 이곳, 파민에서 시간을 관리하고, 결정을 내리고,
          기억하며, 계획하세요.
          <br />
          <br />
          가장 간단한 일상의 부분에서부터 가장 복잡한 계획까지, 여러분의 모든
          순간을 소중하게 만들어주는 파민. 단지 일상을 보다 편리하게 만드는 것이
          아니라, 이를 통해 여러분의 삶이 보다 풍요로워지길 바랍니다.
          <br />
          <br />
          지금 바로 파민과 함께, 삶을 간편하고 재미있게 만들어 보세요.
        </p>
        <div className="flex mt-6 space-x-3">
          <a
            href="/contact"
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Contact Me
          </a>
          <a
            href="/projects"
            className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
          >
            View My Projects
          </a>
        </div>
      </div>
    </>
  );
}
