import "./MainNav.css";
import gymLogo from "../../assets/logo.jpg";
import { useEffect, useState } from "react";
import WarningModal from "../UI/WarningModal";

function MainNav(props) {
  const [isLoginClicked, setIsLoginClicked] = useState(false);

  const onLogin = () => {
    setIsLoginClicked(true);
  };

  useEffect(() => {
    if (props.getIsLogin) {
      props.getIsLogin(isLoginClicked);
    }
  }, [isLoginClicked]);

  const onNavClick = () => {
    setIsLoginClicked(false);

    if (props.exitLogin) props.exitLogin(isLoginClicked);
  };

  return (
    <>
      {console.log("main-nav", isLoginClicked)}
      <nav id="main-nav">
        <div className="logo">
          <a href="#main-nav" onClick={onNavClick}>
            <img src={gymLogo} alt="logo" />
          </a>
        </div>
        <ul className="nav-links">
          <li className="nav-link">
            <a href="#about-section" onClick={onNavClick}>
              About Us
            </a>
          </li>
          <li className="nav-link membership">
            <a href="#memberships" onClick={onNavClick}>
              Membership
            </a>
          </li>
          <li className="nav-link">
            <a href="#slider" onClick={onNavClick}>
              Facilities
            </a>
          </li>
          {!props.hideButton && (
            <li className="nav-link login">
              <a onClick={onLogin}>Login</a>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}

export default MainNav;
