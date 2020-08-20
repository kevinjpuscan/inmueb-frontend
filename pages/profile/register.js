import React from "react";
import Wrapper from "../../components/Wrapper";
import Link from "next/link";
import Layout from "../../components/Layout";

function Register() {
  return (
    <Layout>
      <div className="register">
        <Wrapper>
          <div className="content-register">
            <div className="logo-register">
              <img src="/logo.svg" alt="logo" />
            </div>
            <div className="form-register">
              <input
                className="simple-input"
                type="email"
                placeholder="Email"
              />
              <input
                className="simple-input"
                type="text"
                placeholder="Nombre"
              />
              <input
                className="simple-input"
                type="password"
                placeholder="Password"
              ></input>
              <input
                className="simple-input"
                type="password"
                placeholder="Repetir Password"
              ></input>
            </div>
            <div className="action-register">
              <button className="btn btn-primary">Registrarse</button>
              <Link href="/profile/login">
                <a>Ir a Login</a>
              </Link>
            </div>
          </div>
        </Wrapper>
      </div>
      <style jsx>
        {`
          .register {
            padding: 2em 0;
          }

          img {
            width: 170px;
          }
          .content-register {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
          }

          .form-register {
            margin: 1em 0;
            text-align: center;
          }

          .action-register {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .action-register a {
            margin: 15px 0;
            font-size: 0.9em;
            font-weight: 500;
            color: var(--secondary);
          }
        `}
      </style>
    </Layout>
  );
}

export default Register;
