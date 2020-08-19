import React from "react";
import styled from "styled-components";
import Logo from "../../images/logo";
import Wrapper from "../../components/Wrapper";
import { Link } from "react-router-dom";

export const RegisterStyled = styled.div`
  padding: 2em 0;
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

    a {
      margin: 15px 0;
      font-size: 0.9em;
      font-weight: 500;
    }
  }
`;

function Register() {
  return (
    <RegisterStyled>
      <Wrapper>
        <div className="content-register">
          <div className="logo-register">
            <Logo width="170px" />
          </div>
          <div className="form-register">
            <input className="simple-input" type="email" placeholder="Email" />
            <input className="simple-input" type="text" placeholder="Nombre" />
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
            <Link to="/login">Ir a Login</Link>
          </div>
        </div>
      </Wrapper>
    </RegisterStyled>
  );
}

export default Register;
