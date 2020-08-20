import React from "react";
import { useRouter } from "next/router";

function BtnGoBack() {
  let router = useRouter();
  const handleClick = () => {
    router.back();
  };
  return (
    <button className="btn-style-less color-primary" onClick={handleClick}>
      <i aria-hidden className="fas fa-arrow-left"></i>
    </button>
  );
}

export default BtnGoBack;
