import React from "react";
import "./index.css";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../assets/images/logo-vinted-web.png";

const NavBar = ({ token, setUser }) => {
  let history = useHistory();
  return (
    <div className="container" id="nav">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <input type="text" />
      {token ? (
        <Link
          className="navbutton"
          onClick={() => {
            setUser(null);
            history.push("/");
          }}
        >
          Déconnexion
        </Link>
      ) : (
        <>
          <Link to="/signup" className="navbutton">
            S'inscrire
          </Link>
          <Link to="login" className="navbutton">
            Se connecter
          </Link>
        </>
      )}

      <Link className="navbutton">Vends tes articles</Link>
    </div>
  );
};

export default NavBar;