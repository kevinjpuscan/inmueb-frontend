import React from "react";
import Header from "../components/Header";
import BtnGoHome from "../components/BtnGoHome";
import Wrapper from "../components/Wrapper";
import InputSearch from "../components/InputSearch";
import Layout from "../components/Layout";

function Landing() {
  return (
    <Layout>
      <div className="landing">
        <Header left={<BtnGoHome />} center={<h1>Inmueb</h1>} />
        {
          <Wrapper page>
            <div className="landing-search">
              <InputSearch />
            </div>
          </Wrapper>
        }
      </div>
      <style jsx>{`
        .landing {
          color: gray;
        }

        .test {
          height: 100vh;
          border: solid 1px gray;
        }

        .landing-search {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </Layout>
  );
}

export default Landing;
