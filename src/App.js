import { useState } from "react";
import LoginForm from "./components/Login/LoginForm";
import ScrollTop from "./components/UI/ScrollTop";

import GymInfo from "./components/welcomePage/GymInfo";
import Header from "./components/welcomePage/Header";
import MainNav from "./components/welcomePage/MainNav";
import Membership from "./components/welcomePage/Membership";
import Slider from "./components/welcomePage/Slider";
import Testimonials from "./components/welcomePage/Testimonials";

function App() {
  const [isLoginPage, setIsLoginPage] = useState(false);
  // const [isWelcomePage, setIsWelcomePage] = useState(false);
  const loginPageHandler = (loginState) => {
    setIsLoginPage(loginState);
    console.log("loginPageHandler", loginState);
  };

  // const welcomePageHandler = (welcomeState) => {
  //   console.log("welcomePageHandler", welcomeState);
  //   if (welcomeState) setIsLoginPage(false);
  // };

  return (
    <>
      {console.log("app return", isLoginPage)}
      <ScrollTop />
      {!isLoginPage && (
        <>
          <MainNav getIsLogin={loginPageHandler} hideButton={isLoginPage} />
          <Header />
          <GymInfo />
          <Membership />
          <Slider />
          <Testimonials />
        </>
      )}

      {isLoginPage && (
        <MainNav exitLogin={loginPageHandler} hideButton={isLoginPage} />
      )}

      {/* {isLoginPage && <LoginForm />} */}
      {/* {isLoginPage && <LoginForm exitLogin={loginPageHandler} />} */}
      {isLoginPage && <LoginForm exitLogin={loginPageHandler} />}
      {/* {!isWelcomePage && <LoginForm exitLogin={welcomePageHandler} />} */}
    </>
  );
}

export default App;
