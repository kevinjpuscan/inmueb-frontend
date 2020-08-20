import React from "react";
import { useRouter } from "next/router";

function BtnGoHome() {
  let router = useRouter();
  return (
    <button className="btn-style-less" onClick={() => router.push("/")}>
      <img src="/logo.svg" alt="logo" />
      <style jsx>{`
        img {
          width: 35px;
          height: 35px;
        }
      `}</style>
    </button>
  );
}

export default BtnGoHome;
