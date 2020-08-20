import React from "react";
import Wrapper from "../../components/Wrapper";
import Link from "next/link";
import Layout from "../../components/Layout";

function Login() {
  return (
    <Layout>
      <Wrapper page>
        <div className="content-login">
          <div className="logo-login">
            <img src="/logo.svg" alt="logo" />
          </div>
          <div className="form-login">
            <input className="simple-input" type="email" placeholder="Email" />
            <input
              className="simple-input"
              type="password"
              placeholder="Password"
            ></input>
          </div>
          <div className="action-login">
            <button className="btn btn-primary">Iniciar Sesion</button>
            <Link href="/profile/register">
              <a>Registrarse</a>
            </Link>
          </div>
        </div>
      </Wrapper>
      <style jsx>
        {`
          .content-login {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
          }
          img {
            width: 170px;
          }
          .form-login {
            margin: 4em 0;
            text-align: center;
          }

          .action-login {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .action-login a {
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

export default Login;
