import React from "react";
import LayoutNew from "../../components/LayoutNew";
import dynamic from "next/dynamic";
import InputSearch from "../../components/InputSearch";

const Map = dynamic(() => import("../../components/MapInput"), {
  ssr: false
});

function Location() {
  return (
    <LayoutNew titleStep="Location" nextStep="/new/information" progress={20}>
      <div className="landing-search">
        <InputSearch placeholder="Ubicación" />
      </div>

      <div className="content-map">
        <Map />
      </div>

      <style jsx>{`
        .landing-search {
          display: flex;
          justify-content: center;
        }
        .content-map {
          padding: 15px 0;
          height: 450px;
        }
      `}</style>
    </LayoutNew>
  );
}

export default Location;
