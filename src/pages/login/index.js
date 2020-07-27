import React from "react";
import styled from "styled-components";
import Logo from "../../images/logo";
import Wrapper from "../../components/wrapper";
import { Link } from "react-router-dom";

export const LoginStyled = styled.div`
  .content-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .form-login {
    margin: 4em 0;
    text-align: center;
  }

  .action-login {
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      margin: 15px 0;
      font-size: 0.9em;
      font-weight: 500;
    }
  }
`;

function Login() {
  return (
    <LoginStyled>
      <Wrapper page>
        <div className="content-login">
          <div className="logo-login">
            <Logo width="170px" />
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
            <Link to="/register">Registrarse</Link>
          </div>
        </div>
      </Wrapper>
    </LoginStyled>
  );
}

export default Login;
