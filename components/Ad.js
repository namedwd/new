import { useEffect } from "react";

const Ad = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-9338031027037605"
      data-ad-slot="2794242859"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default Ad;
