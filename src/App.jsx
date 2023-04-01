import { createContext, useContext, useState } from 'react';
import Router from "./routes/Router";
import GlobalStyles from "./app.style"

function App() {
  const AuthContext = createContext();
  const isAuthorized = localStorage.getItem("Authorization");
  // const [isLogin, setIsLogin] = useState(false);
  // {isAuthorized ? setIsLogin(true) : setIsLogin(false)}
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
}
export default App;
