import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/HeaderStyle.css";

export const Header = (props) => {
  const { isAuthenticated, login, logout } = props.auth;
  return (
    <div>
      <header id="main-header">
        <section id="branding">
          <section id="logo">
            <img src="https://via.placeholder.com/150" />
          </section>
          <section id="title">
            <h1>Fordorth</h1>
          </section>
        </section>
        <section id="navigation">
          <nav>
            <div id="toggleButton">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <ul>
              <li className="link">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="divider">|</li>
              <li className="link">
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li className="divider">|</li>
              <li className="link">
                <NavLink to="/contact">Contacts</NavLink>
              </li>

              {isAuthenticated() ? (
                <ul>
                  <li className="divider">|</li>
                  <li>
                    <NavLink to="/admin">Admin</NavLink>
                  </li>
                </ul>
              ) : null}
              <li className="divider">|</li>
              <li>
                <button onClick={isAuthenticated() ? logout : login}>
                  {" "}
                  {isAuthenticated() ? "Logout" : "Login\nSignup"}
                </button>
              </li>
            </ul>
          </nav>
        </section>
      </header>
    </div>
  );
};

/*
#access_token=phcSYBeqCo_1eFvD2nkUtvDiDcnqfzrT
&scope=openid%20profile%20email
&expires_in=7200
&token_type=Bearer
&state=5YEV_mezp48gl6Iyv4nrdaGEQoqrL74v
&id_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImNHZ05tM0hXM0xWeWNIV0Rzbjh0MSJ9.eyJnaXZlbl9uYW1lIjoiVGhvbWFzIiwiZmFtaWx5X25hbWUiOiJHb3VsZCIsIm5pY2tuYW1lIjoiZmlyZWJpcmQyNTUyIiwibmFtZSI6IlRob21hcyBHb3VsZCIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHaFRFZlJDclJ2ZTh1R1VKemNoUHBlb3VPOE56UXU3Z0lZNm9XRDgwZz1zOTYtYyIsImxvY2FsZSI6ImVuIiwidXBkYXRlZF9hdCI6IjIwMjEtMDctMjhUMTU6MDc6MzguMzg2WiIsImVtYWlsIjoiZmlyZWJpcmQyNTUyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL2Rldi1wb200cGtoei51cy5hdXRoMC5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMDkyMTIzODMyOTc5MTg1MDk4MTEiLCJhdWQiOiJGdzFIb015V1VpYlVCVTZNdlhYazZOQlF0WjhDOTZGQiIsImlhdCI6MTYyNzQ4NDg4NCwiZXhwIjoxNjI3NTIwODg0LCJhdF9oYXNoIjoiUVNCSWktZGtWeER0WVVlbmdkRmxCZyIsIm5vbmNlIjoiT2gyOVIxUHVoNTY2NHdoZlBFSGR0dlhZTF9wTlA1LngifQ.eRDKpZlFlaBrjGbS9NRePSjkkfZ7ATZ95FcRIFyjMCaIlsb041RgaZYVvjBvADRHmeVmw45p0aTh1iOhcsVIqItJzsssWnZcFZsSt-jVyC8b9tDpUMR1T6rE-bLLS1W0w-MSxooHG1dzTyXUXA_GiKHVjoHri6-yrwtKPdnhs7CWIoNXBgTjj8a_GCuNFwGZ9YBsDDW9Z-h1bLppnzKs_A2q5B-bC2xD-LNjnMZauMNmlW8gGZyizJZNzVGPNAcGQRKflUdgzkbunnK5vx05ok2J9DV0LB1ZkWaLRTJ1x2r1NUBh9K-0bWYPHDUcEP4vJUB8sDWrhDIWf2z-7geg0g
*/
